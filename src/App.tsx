import React, { useEffect, useState } from "react"
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import { FlatList } from "react-native-macos"

import { Colors } from "react-native/Libraries/NewAppScreen"
import { fetchRates } from "./nbsService"
import Clipboard from "@react-native-community/clipboard"
import Toast from "react-native-toast-message"

function App(): JSX.Element {
    const [rates, setRates] = useState<any[]>([])
    const isDarkMode = useColorScheme() === "dark"

    const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter
    const titleColor = isDarkMode ? Colors.lighter : Colors.darker
    const backgroundStyle = {
        backgroundColor,
    }

    useEffect(() => {
        fetchRates().then((data) => {
            setRates(data)
        })
    }, [])

    const copyToClipboard = (rate: string) => {
        Clipboard.setString(rate)
        Toast.show({
            type: "info",
            text1: "Rate  copied to clipboard 👌",
            text2: rate,
            position: "bottom",
            visibilityTime: 2000,
        })
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={rates}
                    keyExtractor={(item) => item.code}
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={styles.vStack}>
                            <Text style={{ paddingTop: 10, fontSize: 30, fontWeight: "900", color: titleColor }}>
                                Exchange Rates
                            </Text>
                            <Text style={{ color: titleColor }}>National Bank of Serbia Middle RSD Exchange Rate</Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <View key={item.code} style={styles.card}>
                            <Text>{item.country}</Text>
                            <View style={styles.hStack}>
                                <View style={styles.hStack}>
                                    <Text style={{ fontWeight: "900", fontSize: 30, color: titleColor }}>
                                        {item.label.toUpperCase()}
                                    </Text>
                                    <Image
                                        style={{ width: 30, height: 20, borderRadius: 3, marginHorizontal: 10 }}
                                        source={{
                                            uri: `https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_png_rectangle/${item.label.toLowerCase()}.png`,
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={styles.mark} onPress={() => copyToClipboard(item.rate)}>
                                    <Text style={styles.highlighted}>{item.rate}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text>{`${item.unit} ${item.label} = ${item.rate} RSD`}</Text>
                        </View>
                    )}
                />
            </View>
            <Toast />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 10,
    },
    box: {
        paddingVertical: 10,
    },
    hStack: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    vStack: {
        flexDirection: "column",
        justifyContent: "center",
        paddingVertical: 10,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    mark: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: "yellow",
    },
    highlighted: {
        fontWeight: "700",
        fontSize: 25,
        color: "#333",
    },
    title: {
        paddingVertical: 10,
    },
    list: {
        width: "100%",
    },
    card: {
        // backgroundColor: "#161E25",
        backgroundColor: "#ff8C00",
        borderRadius: 5,
        padding: 20,
        width: "100%",
        marginBottom: 10,
    },
})

export default App
