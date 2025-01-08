# Augur Dashboard

A single-page application (SPA) for the Augur predictive supply chain management system. This dashboard displays key metrics for PepsiCo distributors, such as:
- Distributor Name
- Quantity of Goods Shipped Last Month
- Forecasted Quantity of Goods to Ship Next Month
- Year-to-Date Average Goods Shipped Per Month

This project uses mock data for demonstration purposes and is designed to integrate with a backend system in future iterations.

---

## Features
- Clean and responsive UI for viewing distributor metrics.
- Mock data to simulate real-world scenarios.
- Built with modern tooling for easy scalability.

---

## Technologies Used
- **React.js**: Frontend framework for building the SPA.
- **Material-UI**: Component library for responsive and aesthetically pleasing design.
- **Node.js & npm**: For managing dependencies and running the development server.

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16+): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/augur-dashboard.git
   cd augur-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm start
   ```
   This will start the application and open it in your default browser at `http://localhost:3000`.

---

## Usage
- View distributor metrics on the dashboard.
- The mock data is displayed in a table format for easy comprehension.

---

## Project Structure
```
augur-dashboard/
├── public/         # Static assets
├── src/            # Source files
│   ├── components/ # Reusable components
│   ├── App.js      # Main application file
│   ├── index.js    # Entry point
├── package.json    # Project metadata and dependencies
└── README.md       # Project instructions
```

---

## Future Enhancements
- Integrate with a backend system to fetch real-time data.
- Add filtering and sorting capabilities to the dashboard.
- Implement authentication for secure access.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgements
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Material-UI Documentation](https://mui.com/)
