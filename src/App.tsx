import React from "react"
import type { PropsWithChildren } from "react"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native"

import { ListItem } from "@rneui/themed"

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen"

type SectionProps = PropsWithChildren<{
    title: string
}>

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                {/* <Header /> */}
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}
                >
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>John Doe</ListItem.Title>
                            <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App
