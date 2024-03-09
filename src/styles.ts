import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    indicator: {
        flex: 1,
    },
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
