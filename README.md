# Pokémon Info Fetcher

A simple web app that fetches and displays information about Pokémon from the [PokéAPI](https://pokeapi.co/).

This project is a hands-on experience in using `fetch()` to interact with an API — built to help understand how to make requests, handle responses, and update the DOM dynamically with JavaScript.

## Features

- Fetches data about a Pokémon based on the name entered by the user.
- Displays the Pokémon’s:
  - Name
  - Type (with color-coded background)
  - Ability
  - Height and Weight
  - Front sprite image
- Handles errors if the Pokémon is not found or if there’s a network issue.
- A clean, user-friendly interface with an input box and a "Search" button.

## Preview

![Image](https://github.com/user-attachments/assets/fdc1465e-ef22-430b-a7c8-975315061e31)

## Technologies Used

- **HTML**: Basic structure of the app.
- **CSS**: Layout and styling for the app.
- **JavaScript**:
  - DOM manipulation to display Pokémon info.
  - Event listeners for user interactions.
  - `fetch()` API to make requests to PokéAPI.
  - Promise handling (`async/await` and `try/catch`).
  - Error handling to manage issues like incorrect input or network failures.

## How It Works

1. **User Interaction**: The user enters a Pokémon's name (e.g., Pikachu) into the input box.
2. **API Request**: JavaScript sends a `GET` request to the [PokéAPI](https://pokeapi.co/) with the Pokémon name.
3. **Response Handling**: The API returns data about the Pokémon (name, type, abilities, height, weight, and image).
4. **Display Information**: The Pokémon's data is displayed on the webpage without reloading:
   - Name, type, ability, height, and weight.
   - Pokémon image is displayed.
5. **Error Handling**: If the Pokémon is not found or if there’s a network issue, an error message is shown.

## Why I Built This

This project helped me understand:

- How to use `fetch()` to get data from an external API.
- How to work with Promises using `async/await` and handle errors using `try/catch`.
- How to manipulate the DOM dynamically based on the fetched data.
- How to handle edge cases, such as when a Pokémon is not found or the API request fails.


## Credits

- Pokémon data provided by [PokéAPI](https://pokeapi.co/).
