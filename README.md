# Currency Converter

A simple yet powerful currency converter web application built using React. This tool allows users to convert between current rates for USD, EUR, and BRL effortlessly.

## Overview

This project stemmed from the need to simplify currency conversions for daily tasks. Observing the manual and time-consuming process my girlfriend encountered using a phone calculator for currency conversions in her job, I designed this React app. It fetches the latest conversion rates through an API to provide quick and accurate currency conversions.

## Features

- **Real-Time Conversion:** Fetches and displays the latest currency conversion rates.
- **Currency Selection:** Allows users to select the base currency for conversion (USD, EUR, or BRL).
- **Intuitive Interface:** Provides a clean and user-friendly interface for seamless conversions.

### Key Components

- **`App.jsx`:** Manages state and UI for the currency conversion process.
- **`CurrencyButton.jsx`:** Renders buttons for currency selection.
- **`index.css`:** Styling for the application.
- **`main.jsx`:** Main entry point of the application.
- **`useCurrencyRates.js`:** Logic for fetching currency conversion rates.

## Logic (in `App.jsx`)

The logic primarily revolves around managing state for the input value, base currency, and fetching current rates. The `handleInputChange` and `handleCurrencyChange` functions update the UI based on user input and currency selection. The `useCurrencyRates` hook fetches the latest rates for the selected base currency.

## How It Works

The application provides a straightforward interface. Select the base currency, enter the amount, and instantly view the converted values for USD, EUR, and BRL.

## Next Steps

Future improvements might include enhancing the UI/UX, adding more currency options, or optimizing the fetching process.

## Contact

For any questions or suggestions regarding this project, feel free to reach out to me [here](mailto:philip@jerkner.se).
