Energy Market Data Fetcher
A Node.js application that fetches data from a JSONPlaceholder API, stores it in MongoDB, and processes it asynchronously using cron jobs.

Features
Fetches data every 30 seconds from JSONPlaceholder.
Stores the data in a MongoDB database.
Asynchronous data processing using node-cron.
Requirements
Node.js
MongoDB (local or remote)

Installation

1. Clone the repository:
git clone https://github.com/FarjadSuhail/Phelas_Energy-Marketing
cd Phelas_Energy-Marketing

2. Install dependencies:
npm install express axios mongoose node-cron nodemon dotenv

3. Create a .env file in the root directory with the following content:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/energyMarket

Usage

1. Start the application:
