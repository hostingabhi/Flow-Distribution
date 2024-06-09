
# API Documentation

## Astrologer Endpoints

### Create Astrologer
- **Endpoint:** `/astrologers`
- **Method:** `POST`
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

### Toggle Top Astrologer
- **Endpoint:** `/astrologers/:id/toggle-top`
- **Method:** `PATCH`
- **Response:**
  ```json
  {
      "_id": "60d5f5b5f5f5f5f5f5f5f5f5",
      "name": "Ast