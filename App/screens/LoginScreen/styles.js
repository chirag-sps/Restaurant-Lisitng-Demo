import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: hp(6),
    marginTop: hp(5),
    marginHorizontal: wp(8),
  },
  buttonStyle: {
    backgroundColor: Colors.green,
    borderWidth: 0,
    color: Colors.white,
    height: hp(6),
    alignItems: 'center',
    borderRadius: wp(10),
    marginHorizontal: wp(8),
    marginTop: hp(5),
  },
  buttonTextStyle: {
    color: Colors.white,
    paddingVertical: hp(1.5),
    fontSize: hp(2),
  },
  inputStyle: {
    flex: 1,
    color: Colors.white,
    paddingHorizontal: wp(5),
    borderWidth: 1,
    borderRadius: wp(10),
    borderColor: Colors.lightGray,
  },
  errorTextStyle: {
    color: Colors.red,
    textAlign: 'center',
    fontSize: hp(1.5),
  },
});
