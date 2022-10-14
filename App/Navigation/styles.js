import { StyleSheet } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen"
import Colors from "../utils/Colors"

export default StyleSheet.create({
    splash : {
        width : wp(100),
        height : hp(100),
        backgroundColor : Colors.white
    }
})