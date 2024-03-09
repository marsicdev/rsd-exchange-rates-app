import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import Toast from "react-native-toast-message"
import Clipboard from "@react-native-community/clipboard"

import { styles } from "../styles"

type Props = {
    item: any
}

const ExchangeCard = ({ item }: Props) => {
    const copyToClipboard = (rate: string) => {
        Clipboard.setString(rate)

        Toast.show({
            type: "info",
            text1: `${rate}`,
            text2: "Rate copied to clipboard 👌",
            position: "bottom",
            visibilityTime: 2000,
        })
    }

    return (
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
    )
}

export default ExchangeCard
