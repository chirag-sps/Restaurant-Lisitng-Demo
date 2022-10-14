import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import strings from '../../Constants/LanguageLocalize/localization';
import styles from './styles';
const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{zIndex : 1}} onPress={props.backClick}>
        <Text style={styles.backText}>{strings.BACK}</Text>
      </TouchableOpacity>
      <Text style={styles.headingText}>{props.heading}</Text>
    </View>
  );
};

export default Header;
