import { StyleSheet } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen"
import Colors from "../../utils/Colors"

export default StyleSheet.create({
    container : {
        position : 'absolute',
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
        justifyContent : "center",
        alignItems : "center",
        zIndex : 10
    }
})