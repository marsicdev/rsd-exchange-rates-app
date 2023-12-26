type ExchangeRate = {
    label: string
    code: string
    country: string
    unit: string
    rate: string
}

export const fetchRates = (): Promise<ExchangeRate[]> => {
    const NBS_RATE_API = "http://localhost:3000"
    return fetch(NBS_RATE_API)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log("error", error)
        })
}
