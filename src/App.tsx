import React from "react"
import { SafeAreaView, StatusBar, useColorScheme, View } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Toast from "react-native-toast-message"

import RatesList from "./home/RatesList"

import { styles } from "./styles"

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === "dark"

    const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter
    const backgroundStyle = {
        backgroundColor,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={styles.container}>
                <RatesList />
            </View>
            <Toast />
        </SafeAreaView>
    )
}

export default App
