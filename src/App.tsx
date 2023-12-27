import React, { useEffect, useState } from "react"
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    FlatList,
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Toast from "react-native-toast-message"
import Clipboard from "@react-native-community/clipboard"

import { fetchRates } from "./nbsService"

const App = (): JSX.Element => {
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
            text1: `${rate}`,
            text2: `Rate copied to clipboard 👌`,
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
                    ListEmptyComponent={
                        <View style={[styles.center]}>
                            <ActivityIndicator size="large" color="#ff8C00" />
                        </View>
                    }
                    ListHeaderComponent={
                        <View style={styles.vStack}>
                            <Text style={{ paddingTop: 10, fontSize: 30, fontWeight: "900", color: titleColor }}>
                                RSD Exchange Rates
                            </Text>
                            <Text style={{ color: "#888" }}>NBS Middle Exchange Rate for Serbian Dinar</Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <View key={item.code} style={styles.card}>
                            <Text>{item.country}</Text>
                            <View style={styles.hStack}>
                                <View style={styles.hStack}>
                                    <Text style={{ fontWeight: "900", fontSize: 30 }}>{item.label.toUpperCase()}</Text>
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
                    ListFooterComponent={
                        <View style={styles.vStack}>
                            <Text style={{ color: "#888" }}>
                                Last update: {new Date().toISOString().replace("T", " / ").replace("Z", "")}
                            </Text>
                            <Text style={{ color: "#888" }}>Source: National Bank Of Serbia</Text>
                        </View>
                    }
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
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    mark: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: "#f9f9f9",
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
        height: "100%",
    },
    card: {
        shadowColor: "#666",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: "#f39c12",
        // borderWidth: 0.5,
        // borderColor: "#fff",
        borderRadius: 5,
        padding: 20,
        width: "100%",
        marginBottom: 10,
    },
})

export default App
