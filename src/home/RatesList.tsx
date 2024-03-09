import React, { useEffect, useState } from "react"
import { ActivityIndicator, Animated, View } from "react-native"

import EmptyView from "./EmptyView"
import ExchangeCard from "./ExchangeCard"
import ListFooter from "./ListFooter"
import ListHeader from "./ListHeader"

import { fetchRates } from "../nbsService"

import { styles } from "../styles"

const RatesList = (): JSX.Element => {
    const [rates, setRates] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        try {
            setLoading(true)

            const rates = await fetchRates()

            setRates(rates)
        } catch (error) {
        } finally {
            setLoading(false)
        }
    }

    const isEmpty = rates.length === 0

    if (isEmpty) {
        return <EmptyView loader text="Patience please..." />
    }

    return (
        <Animated.SectionList
            style={styles.list}
            sections={[{ title: "", data: rates }]}
            keyExtractor={(item) => item.code}
            alwaysBounceVertical={false}
            refreshing={loading}
            onRefresh={init}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyView />}
            stickyHeaderHiddenOnScroll={true}
            stickySectionHeadersEnabled={true}
            renderItem={({ item }) => <ExchangeCard item={item} />}
            ListFooterComponent={!isEmpty ? <ListFooter /> : null}
            renderSectionHeader={() => (
                <View style={{ backgroundColor: "black" }}>
                    <ListHeader />
                </View>
            )}
        />
    )
}

export default RatesList
