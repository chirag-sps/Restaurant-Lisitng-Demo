import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    height : hp(8),
    flexDirection : "row",
    backgroundColor: Colors.green,
    alignItems : 'center'
  },
  headingText : {
    color : Colors.white,
    textAlign : "center",
    fontSize : hp(2),
    position: "absolute",
    top: hp(2.5),
    left: 0,
    right: 0,
    bottom: hp(1.5),
    
  },
  backText : {
    color : Colors.white,
    fontSize : hp(2),
    marginStart : wp(3),
  },
  
});
