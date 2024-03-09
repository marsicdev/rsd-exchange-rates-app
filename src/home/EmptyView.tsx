import React from "react"
import { View, ActivityIndicator } from "react-native"

import { styles } from "../styles"
import { BodyText } from "../UI"

type Props = {
    text?: string
    loader?: boolean
}

const EmptyView = ({ text, loader = false }: Props): JSX.Element => (
    <View style={[styles.center]}>
        {loader && <ActivityIndicator size="large" color="#ff8C00" />}
        {text && <BodyText>{text}</BodyText>}
    </View>
)

export default EmptyView
