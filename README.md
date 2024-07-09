# Project 
# Gaurav Food App

**Live Demo**: [Gaurav Food App](https://gaurav-food-app.netlify.app/home)

## Overview
A modern food ordering web application designed to offer a seamless ordering experience with features including browsing restaurants, filtering by ratings, a cart system, and user authentication.

## Tech Stack
- React
- Redux
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3
- Tailwind CSS

## Features
- **Dynamic Routing**: Managed with `createBrowserRouter` from React Router for clean URLs and efficient navigation.
- **State Management**: Utilized Redux for consistent state across components, designed to handle cart functionality and user sessions.
- **Authentication**: Implemented the Context API for preserving user login state throughout the application.
- **Performance**: Used React's `lazy` and `Suspense` for lazy loading components, reducing initial load time.
- **API Integration**: Incorporated third-party APIs for fetching dynamic restaurant data.

## Components
- Reusable UI components like `Header`, `Footer`, `ContactUs`, and `RestaurantMenu`.
- `SearchBar` component equipped with real-time search and filter capabilities.
- Custom hooks `useOnlineStatus` and `useRestaurantMenu` for encapsulating common logic.

## Styling
- Responsive design achieved with Tailwind CSS, ensuring compatibility across devices.
- Intuitive UX with interactive elements like hover effects and smooth transitions.

## Installation and Setup
- run npm i to install node modules
- run npm run build to buidl application using parcel
- run npm run clean to clear parcel cache
