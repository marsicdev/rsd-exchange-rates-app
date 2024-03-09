import React from "react"
import { Text, View, useColorScheme } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

import { styles } from "../styles"

const RatesList = (): JSX.Element => {
    const isDarkMode = useColorScheme() === "dark"
    const titleColor = isDarkMode ? Colors.lighter : Colors.darker
    const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter

    return (
        <View style={[styles.vStack, { backgroundColor }]}>
            <Text style={{ paddingTop: 10, fontSize: 30, fontWeight: "900", color: titleColor }}>
                RSD Exchange Rates
            </Text>
            <Text style={{ color: "#888" }}>NBS Middle Exchange Rate for Serbian Dinar</Text>
        </View>
    )
}

export default RatesList
