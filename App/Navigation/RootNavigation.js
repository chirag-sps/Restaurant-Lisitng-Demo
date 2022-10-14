import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as storage from '../Service/AsyncStoreConfig';
import {Loader} from '../Components/Loader';
import BeforeLoginNavigator from './beforeLoginNavigator';
import AfterLoginNavigator from './afterLoginNavigator';
import {setLogin, setSplash} from '../Redux/Actions/loginAction';
import styles from './styles';
import NavigationService from './NavigationService';

const RootStack = createNativeStackNavigator();

const splashScreen = () => (
  <View style={styles.splash}>
    <Loader show />
  </View>
);

const RootNavigation = () => {
  const dispatch = useDispatch();
  const {userEmail, showSplash} = useSelector(state => state.loginReducer);

  useEffect(() => {
    checkAuth();
  }, [userEmail]);

  const checkAuth = async () => {
    try {
      const email = await storage.getItem('userEmail');
      if(email != null) {
        dispatch(setLogin(email));
      }
      else {
        dispatch(setSplash(false));
      }
      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      {showSplash ? (
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="SplashScreen" component={splashScreen} />
        </RootStack.Navigator>
      ) : userEmail !== null ? (
        <AfterLoginNavigator />
      ) : (
        <BeforeLoginNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
