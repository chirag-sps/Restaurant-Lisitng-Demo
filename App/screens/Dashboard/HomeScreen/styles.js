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
    
  },
  textContainer: {
    width: wp(90),
    alignSelf:'center',
    flexDirection : 'row',
    alignItems : 'center',
    borderColor : Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 1.4,
    marginBottom:hp(1),
    marginTop : hp(2.5),
    height: hp(15),
    borderRadius: wp(2),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: hp(1),
    shadowColor: Colors.black,
    paddingHorizontal: wp(5)
  },
  headingText:{
		fontSize: hp(2),
		color: Colors.black,
    marginBottom:hp(1),
    fontWeight : 'bold',
    maxWidth : wp(45)
  },
  imageStyle : {
    width: wp(15), 
    height: wp(15), 
    borderRadius: wp(2)
  },
  locationContainer : {
    backgroundColor: Colors.green,
    width: wp(10),
    height: wp(10),
    position: 'absolute',
    right: wp(3),
    borderRadius: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon : {
    width: wp(6), 
    height: wp(6)}
});
