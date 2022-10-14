import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Colors from '../../utils/Colors';

export const Loader = props => {
  const {show} = props;

  if (!show) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.black} />
      </View>
    );
  }
};
