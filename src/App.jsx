import React, { useState, useRef } from "react"
import CurrencyButton from "./CurrencyButton"
import { useCurrencyRates } from "./useCurrencyRates"

// Object containing currency symbols for different currencies
const currencySymbols = {
    BRL: "R$",
    USD: "$",
    EUR: "€",
}

export default function CurrencyConverter() {
    // State management
    const [inputValue, setInputValue] = useState("") // Input value for currency conversion
    const [baseCurrency, setBaseCurrency] = useState("EUR") // Base currency selection
    const inputRef = useRef(null) // Reference to input element
    const currentRates = useCurrencyRates(baseCurrency) // Fetch current rates for base currency

    // Handles changes in the input field
    const handleInputChange = (e) => {
        let value = e.target.value

        // Cap the input value to 7 digits
        if (value.length > 7) {
            value = value.slice(0, 7)
        }

        setInputValue(value)
    }
    // Handles currency change button clicks
    const handleCurrencyChange = (currency) => {
        setBaseCurrency(currency) // Sets the new base currency
        inputRef.current.focus() // Focuses on the input field
    }

    return (
        <main>
            {/* Selecting base currency */}
            <h2 className="convert-from">
                Click the currency you wish to convert from:
            </h2>
            <div className="currency-choice">
                {Object.keys(currencySymbols).map((currency) => (
                    <CurrencyButton
                        key={currency}
                        currency={currency}
                        onClick={handleCurrencyChange} // Triggered when a currency button is clicked
                    />
                ))}
            </div>

            {/* Form for entering the amount */}
            <div className="form">
                <div className="input-form">
                    <div className="currency-symbol">
                        {currencySymbols[baseCurrency]}{" "}
                        {/* Displaying selected base currency symbol */}
                    </div>
                    <input
                        type="number"
                        id="inputValue"
                        placeholder="0.00"
                        value={inputValue}
                        onChange={handleInputChange} // Triggered on input value change
                        ref={inputRef} // Assigning a reference to the input element
                        maxLength={7}
                    />
                </div>

                {/* Displaying converted rates */}
                <div className="converted-rates">
                    {Object.entries(currentRates).map(([currency, rate]) => (
                        <div
                            key={currency}
                            className="current-rates"
                        >
                            <span className="currency-symbol">
                                {currencySymbols[currency]}{" "}
                                {/* Displaying currency symbol for converted rate */}
                            </span>
                            <span className="converted-value">
                                {(inputValue * rate).toFixed(2)}{" "}
                                {/* Calculating and displaying converted value */}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
