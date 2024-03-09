import React from "react"
import { Text, useColorScheme } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

type Props = {
    children: React.ReactNode
}

export const BodyText = ({ children }: Props) => {
    const isDarkMode = useColorScheme() === "dark"
    const TextColor = isDarkMode ? Colors.lighter : Colors.darker

    return <Text style={{ color: TextColor, marginTop: 20 }}>{children}</Text>
}
