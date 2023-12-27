import { useEffect, useState } from "react"

// Assuming the API key is accessed through import.meta.env.VITE_API_KEY
const API_KEY = import.meta.env.VITE_API_KEY

export function useCurrencyRates(baseCurrency) {
    // State to hold the current currency rates
    const [currentRates, setCurrentRates] = useState({})

    useEffect(() => {
        // Function to fetch the latest rates based on the provided base currency
        const fetchLatestRates = async (base) => {
            try {
                // Filter out the base currency from the target currencies
                const targetCurrencies = ["EUR", "BRL", "USD"].filter(
                    (currency) => currency !== base
                )

                // Create an array of promises for fetching rates for each target currency
                const promises = targetCurrencies.map(async (currency) => {
                    const response = await fetch(
                        `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${base}/${currency}`
                    )

                    // Extract the conversion rate directly from the JSON response
                    return {
                        currency,
                        rate: (await response.json()).conversion_rate,
                    }
                })

                // Await all promises to resolve
                const results = await Promise.all(promises)

                // Reduce the array of results to a single object with currency rates
                const filteredRates = results.reduce(
                    (acc, { currency, rate }) => ({ ...acc, [currency]: rate }),
                    {}
                )

                // Update the state with the fetched currency rates
                setCurrentRates(filteredRates)
            } catch (error) {
                // Handle any errors that occur during fetching
                console.error("Error fetching latest rates:", error)
            }
        }

        // Trigger the fetch for rates whenever the base currency changes
        fetchLatestRates(baseCurrency)
    }, [baseCurrency]) // Run this effect whenever baseCurrency changes

    // Return the current currency rates state
    return currentRates
}
