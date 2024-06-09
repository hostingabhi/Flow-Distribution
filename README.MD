# Astrologer Flow Distribution Algorithm

## Overview
This project implements a flow distribution algorithm in Node.js for connecting users with astrologers. The goal is to ensure each astrologer gets an equal proportion of chances to connect with users, while providing flexibility to adjust the flow for top astrologers.

## Features
- Fair and balanced user distribution among astrologers
- Toggle top astrologer status
- Efficient handling of a daily flow of 2000-3000 users and a pool of 500 astrologers
- RESTful API endpoints for managing astrologers and distributing users
- Comprehensive unit tests to validate functionality

## Project Structure
```
astrologer-distribution/
├── controllers/
│   ├── astrologerController.js
│   └── userController.js
├── models/
│   ├── astrologer.js
│   └── user.js
├── routes/
│   ├── astrologerRoutes.js
│   └── userRoutes.js
├── services/
│   ├── astrologerService.js
│   └── distributionService.js
├── tests/
│   ├── astrologer.test.js
│   └── distribution.test.js
├── app.js
├── config.js
├── package.json
└── README.md
```

## Prerequisites
- Node.js (>= 14.x)
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hostingabhi/Flow-Distribution.git
   cd astrologer-distribution
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Documentation

### Astrologer Endpoints

#### Create Astrologer
- **Endpoint:** `POST /astrologers`
- **Request Body:**
  ```json
  {
      "name": "Astro1",
      "isTopAstrologer": false
  }
  ```
- **Response:**
  ```json
  {
      "_id": "60d5f5b5f5f5f5f5f5f5f5f5",
      "name": "Astro1",
      "connections": 0,
      "isTopAstrologer": false
  }
  ```

#### Toggle Top Astrologer
- **Endpoint:** `PATCH /astrologers/:id/toggle-top`
- **Response:**
  ```json
  {
      "_id": "60d5f5b5f5f5f5f5f5f5f5f5",
      "name": "Astro1",
      "connections": 0,
      "isTopAstrologer": true
  }
  ```

### User Endpoints

#### Distribute User
- **Endpoint:** `POST /users/distribute`
- **Request Body:**
  ```json
  {
      "name": "User1"
  }
  ```
- **Response:**
  ```json
  {
      "_id": "60d5f5b5f5f5f5f5f5f5f5f5",
      "name": "User1",
      "connectedAstrologer": "60d5f5b5f5f5f5f5f5f5f5f5"
  }
  ```

## Running Tests

To run the tests, use the following command:
```bash
npm test
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License.


### Notes:
- Replace placeholder values (e.g., `your_mongodb_connection_string`) with actual values.

### Postman Link
https://api.postman.com/collections/29369424-0a481dfe-ccda-4f53-9688-f639b94fdc7f?access_key=PMAT-01HZZFA3RYR1PA72VK30P0S55Z