type ExchangeRate = {
    label: string
    code: string
    country: string
    unit: string
    rate: string
}

export const fetchRates = (): Promise<ExchangeRate[]> => {
    const NBS_RATE_API = "https://nbs.hypetech.xyz/api/nbs/rates"

    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("x-api-key", "1b89116e13a18125d4bad6326d95e2e7")

    return fetch(NBS_RATE_API, {
        headers,
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("error", error)
        })
}
