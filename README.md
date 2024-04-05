# React Application for Subscription Signup Process

## Table of Contents

-[Overview](#Overview)
-[Features](#features)
-[Technologies Used](#technologies-used)
-[Installation](#installation)
-[Usage](#usage)
-[Available Scripts](#available-scripts)
-[Project Structure](#project-structure)
-[Key Components](#Key-Components)
-[Credits](#Credits)


## Overview

This React application simulates a subscription signup process, guiding users through multiple steps to collect their information and preferences. It was developed as a Frontend Mentor challenge.

## Features

Multi-step form covering personal information, plan selection, add-ons, and a summary.
User input validation for required fields.
Plan price calculation based on plan choice and add-ons.
User-friendly navigation between steps.
Responsive design for different screen sizes.

## Technologies Used

React
React Router DOM
Context API for state management
Hooks (useState, useEffect, useContext)
CSS for styling

## Installation

Clone the repository:
Bash
git clone https://github.com/your-username/your-repository-name.git
Use code with caution.
Install dependencies:
Bash
cd your-repository-name
npm install
Use code with caution.

## Usage

Start the development server:
Bash
npm start
Use code with caution.
Open http://localhost:3000 in your browser.

## Available Scripts

npm start: Starts the development server.
npm test: Runs tests (if any).
npm run build: Builds the production-ready code.

## Project Structure

app/
├── components/      # Reusable React components
│   ├── plan/       # Components related to plan selection
│   └── ...
├── context/         # React Context for state management
├── pages/           # Individual pages of the application
│   └── ...
├── public/          # Public assets (images, etc.)
├── styles/          # CSS files
└── App.js           # Main entry point

## Key Components

FormContext: Provides a global state for form data and navigation.
SideNav: A persistent side navigation component.
PlanPage: Displays plan options and handles plan selection.
AddOns: Allows users to choose optional add-ons.
Finish: Shows a summary of the subscription details.

## Credits

Frontend Mentor for providing the challenge.
Link to specific challenge on Frontend Mentor: https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ