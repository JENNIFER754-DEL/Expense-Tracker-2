# Expense Tracker

## Description
A simple expense tracker application built with React. It allows users to add, view, and delete expenses, with filtering options by description or category. The app features a responsive design for both mobile and desktop devices.

## Features
- Add, view, and delete expenses
- Filter expenses by description or category
- Responsive design for mobile and desktop

## Technologies Used
- React
- Vite
- JSON Server (for mock API)
- Vanilla CSS

## Deployment
The application is deployed on Vercel.  
Live demo: [Expense Tracker](https://expense-tracker-2-6fv6qrssc-jennifer754-dels-projects.vercel.app/)

## Setup

### Clone the repository
```bash
git clone <repository-url>
```

### Navigate to the project directory
```bash
cd expense-tracker-app
```

### Install dependencies
```bash
npm install
```

## Development

### Start the development server
```bash
npm run dev
```

Open the app in your browser at:  
http://localhost:3000

## Build

### Create a production build
```bash
npm run build
```

The build will be available in the `dist` folder.

## Run JSON Server

### Start the mock API server
```bash
json-server --watch tasks.json
```

### Run JSON Server on a custom port
```bash
json-server --watch tasks.json --port 3001
