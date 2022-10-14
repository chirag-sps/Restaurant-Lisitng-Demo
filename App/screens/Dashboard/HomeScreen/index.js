import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../../Components/Header';
import {
  fetchDbRestaurants,
  getRestaurantList,
} from '../../../Redux/Actions/homeActions';
import styles from './styles';
import {Loader} from '../../../Components/Loader';
import {MapIcon, StarEmpty, StarFill} from '../../../utils/images';
import {getLocalDbRestaurant} from '../../../Database/allSchema';
import strings from '../../../Constants/LanguageLocalize/localization';
import {Rating} from 'react-native-rating-element';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const {loader, restaurantList} = useSelector(state => state.homeReducer);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    getLocalDbRestaurant()
      .then(res => {
        if (res.length == 0) {
          dispatch(getRestaurantList());
        } else {
          dispatch(fetchDbRestaurants(res));
        }
      })
      .catch(error => {});
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    Alert.alert(strings.EXIT, strings.EXIT_TITLE, [
      {
        text: strings.CANCEL,
        onPress: () => null,
        style: 'cancel',
      },
      {text: strings.YES, onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() =>
          props.navigation.navigate('HomeDetailScreen', {locationData: item})
        }>
        <Image style={styles.imageStyle} source={{uri: item?.images[0].url}} />
        <View style={{marginStart: 10}}>
          <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={styles.headingText}>
            {item?.title}
          </Text>
          <Rating
            rated={item?.rating}
            totalCount={5}
            size={wp(3)}
            onIconTap={position => console.log(`User pressed: ${position}`)}
            direction="row"
            type="custom" // default is always to "icon"
            selectedIconImage={StarFill}
            emptyIconImage={StarEmpty}
          />
        </View>

        <View style={styles.locationContainer}>
          <Image
            source={MapIcon}
            style={styles.locationIcon}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  const onBackClick = () => {
    backAction();
  };

  //for pagination hit api again with page number but currently pagination is supported by
  //  this api
  const loadMoreItem = () => {
    dispatch(getRestaurantList());
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header heading={strings.RESTAURANT_LIST} backClick={onBackClick} />
      <FlatList
        data={restaurantList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // onEndReached={loadMoreData}
      />
      <Loader show={loader} />
    </SafeAreaView>
  );
};

export default HomeScreen;
