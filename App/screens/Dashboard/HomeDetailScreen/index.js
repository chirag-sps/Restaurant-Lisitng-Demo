import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import MapView, {Marker, Polyline, Callout} from 'react-native-maps';
import Header from '../../../Components/Header';
import {hasLocationPermission} from '../../../Service/Permissions';
import styles from './styles';
import Geolocation from 'react-native-geolocation-service';
import {MapPinIcon, StarEmpty, StarFill} from '../../../utils/images';
import strings from '../../../Constants/LanguageLocalize/localization';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Rating} from 'react-native-rating-element';
import Colors from '../../../utils/Colors';
const HomeDetailScreen = props => {
  const {locationData} = props?.route.params;
  const [origin, setOrigin] = useState({latitude: 0, longitude: 0});
  const [coords, setCoords] = useState([]);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    fetchingUserLocation();

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    props.navigation.goBack();
    return true;
  };

  const fetchingUserLocation = async () => {
    const hasPermission = await hasLocationPermission();
    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        setOrigin({
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
        });
        getDirections(
          `${position?.coords?.latitude},${position?.coords?.longitude}`,
          `${locationData?.latitude},${locationData?.longitude}`,
        );
      },
      error => {
        // See error code charts below.
        console.log('error getting geolocation', error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const getDirections = async (startLoc, destinationLoc) => {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=""`,
      );
      let respJson = await resp.json();
      let points = Polyline.decode(
        respJson?.routes[0]?.overview_polyline?.points,
      );
      if (points) {
        let coords = points.map((point, index) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        setCoords(coords);
      }
    } catch (error) {
      //alert(error)
    }
  };

  const renderTooltipData = () => {
    return (
      <View style={{flexDirection: 'row', flex: 1, height: hp(10)}}>
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={styles.nameText}>
            {locationData?.title}
          </Text>

          <Rating
            rated={locationData?.rating}
            totalCount={5}
            size={wp(3)}
            direction="row"
            type="custom" // default is always to "icon"
            selectedIconImage={StarFill}
            emptyIconImage={StarEmpty}
          />
        </View>
      </View>
    );
  };

  const onBackClick = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header heading={strings.MAP_VIEW} backClick={onBackClick} />
      <MapView
        style={styles.map}
        provider={'google'}
        showsUserLocation={true}
        initialRegion={{
          latitude: parseFloat(locationData?.latitude),
          longitude: parseFloat(locationData?.longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: parseFloat(locationData?.latitude),
            longitude: parseFloat(locationData?.longitude),
          }}>
          <View>
            <Image
              source={MapPinIcon}
              style={{width: 40, height: 40}}
              resizeMode="contain"
            />
          </View>
          <Callout style={{height: hp(6)}}>{renderTooltipData()}</Callout>
        </Marker>
        <Polyline
          coordinates={coords}
          strokeColor={Colors.black}
          strokeWidth={6}
        />
      </MapView>
    </SafeAreaView>
  );
};

export default HomeDetailScreen;
