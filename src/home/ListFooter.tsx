import React from "react"
import { Text, View } from "react-native"

import { styles } from "../styles"

type Props = {}

const ListFooter = (props: Props) => {
    return (
        <View style={styles.vStack}>
            <Text style={{ color: "#888" }}>
                Last update: {new Date().toISOString().replace("T", " / ").replace("Z", "")}
            </Text>
            <Text style={{ color: "#888" }}>Source: National Bank Of Serbia</Text>
        </View>
    )
}

export default ListFooter
