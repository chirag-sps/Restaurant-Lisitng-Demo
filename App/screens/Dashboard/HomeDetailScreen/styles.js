import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: hp(92),
    position: 'relative',
  },
  circle: {
    width: 30,
    height: 30,
  },
  pinText: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  nameText: {
    color: Colors.black,
    width: wp(30),
    fontSize: hp(1.5),
    fontWeight: 'bold',
  },
});
