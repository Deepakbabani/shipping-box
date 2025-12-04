# Shipping Box Calculator

A React application for calculating shipping costs for boxes from India to various countries worldwide.

## Features

- Add box details including receiver name, weight, color, and destination country
- Calculate shipping cost based on weight and country-specific multipliers
- View list of all added boxes in a table
- Responsive design using Tailwind CSS
- Local storage for data persistence

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router DOM

## Architecture

The application follows an MVC-style design pattern:

- **Model**: BoxContext handles data management and local storage
- **View**: React components (Navbar, Form, Table) for UI
- **Controller**: App component manages routing and state flow

## Installation and Setup

1. Ensure Node.js (version 16 or higher) is installed on your system.

2. Clone or download the project files to your local machine.

3. Navigate to the project directory in your terminal.

4. Install dependencies:

   ```
   npm install
   ```

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- Use the navbar to switch between "Add Box" and "List Boxes" views.
- In the Add Box form:
  - Enter receiver name (required)
  - Enter weight in kilograms (required, must be positive)
  - Select box color using the color picker
  - Choose destination country from the dropdown
  - Click "Save" to add the box
- View all added boxes in the List Boxes table, including calculated shipping costs.

## Shipping Cost Calculation

Shipping costs are calculated as: `weight (kg) * country_multiplier`

Country multipliers:

- Sweden: 7.35 INR
- China: 11.53 INR
- Brazil: 15.63 INR
- Australia: 50.09 INR

## Validation

- All form fields are required
- Weight must be a positive number
- Error messages are displayed for invalid inputs

