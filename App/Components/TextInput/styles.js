import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    width: wp(90),
    marginVertical: 12,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: Colors.white,
  },
  description: {
    fontSize: hp(1.5),
    color: Colors.secondary,
    paddingTop: hp(1),
  },
  error: {
    fontSize: hp(1.3),
    color: Colors.error,
    paddingTop: hp(1),
  },
});
