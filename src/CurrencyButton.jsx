import React from "react"

export default function CurrencyButton({ currency, onClick }) {
    // Function to get the image URL based on the currency
    const getImageByCurrency = (currency) => {
        switch (currency) {
            case "EUR":
                return "/EUR.svg"
            case "USD":
                return "/USD.svg"
            case "BRL":
                return "/BRL.svg"
            default:
                return ""
        }
    }

    return (
        // Button component triggering the onClick callback with the provided currency
        <button
            className="currency-button"
            onClick={() => onClick(currency)}
        >
            {/* Image displaying the currency icon */}
            <img
                src={getImageByCurrency(currency)} // Get the URL based on the currency
                alt={currency} // Alt text displaying the currency code
            />
        </button>
    )
}
