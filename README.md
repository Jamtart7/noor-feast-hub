# Noor Restaurant — Online Ordering

A full-stack ordering website built for Noor Restaurant, an Indian & Bangladeshi
restaurant in Hornchurch, East London.

🔗 **Live site:** [noorrestaurant.co.uk](https://noorrestaurant.co.uk)

## Features

- Full digital menu across appetisers, tandoori grill, biryani, balti, curries,
  vegetarian sides, rice, and bread
- Online ordering with delivery or collection
- Card payments via Stripe, plus cash-on-collection/delivery
- Orders logged and emailed automatically via Google Sheets + Apps Script
- Photo gallery of the restaurant and food

## Tech stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** PHP (order handling, Stripe integration)
- **Data:** Google Sheets (order logging), Google Apps Script (email notifications)
- **Hosting:** GoDaddy

## Project structure

- `src/` — frontend application (pages, components, menu data)
- `public/` — static assets and images
- Backend API (Stripe checkout, order submission) deployed separately alongside
  the built frontend

## Status

Actively maintained — menu and features are updated as the restaurant's
offering changes.
