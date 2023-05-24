# URL Shortener Microservice

This is a backend microservice that provides URL shortening functionality. It allows users to shorten long URLs into shorter, more manageable links. This microservice is built using JavaScript, Node.js, Express.js and utilizes a Database not relationship like MongoDB for storing and retrieving shortened URLs.

## Getting Started

To get started with the URL Shortener Microservice, follow the instructions below:

## Prerequisites

* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository: git clone [https://github.com/Victor1890/url-shortener-node.git](https://github.com/Victor1890/url-shortener-node.git)

2. Install dependencies: npm install

3. Configure the database connection: Update the database configuration file with your database credentials.

4. Start the server: npm start

## API Documentation

The URL Shortener Microservice exposes the following APIs:

### Shorten a URL

#### Endpoint: `/api/shorturl`

#### Method: `POST`

#### Request Body:

```json
{
  "url": "https://www.example.com/very/long/url/to/shorten"
}
```

#### Response:

```json
{
  "originalUrl": "https://www.example.com/very/long/url/to/shorten",
  "shortUrl": "https://your-shortened-url.com/xyz123"
}
```

### Redirect to Original URL

#### Endpoint: `/api/shorturl/:url`

#### Method: `GET`

When a user visits the shortened URL, they will be redirected to the original long URL.

### Deployment

To deploy the URL Shortener Microservice in a production environment, follow these steps:

1. Set the appropriate environment variables for production (e.g., database credentials, API keys, etc.).
2. Build the application: npm run build
3. Start the server in production mode: npm run start:prod

### Contributing

If you would like to contribute to the URL Shortener Microservice, follow these steps:

1. Fork the repository
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make your changes and commit them: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature/your-feature-name
Submit a pull request

### Contact

For any inquiries or issues, please contact [Victor J. Rosario R](mailto:victorrosariodeveloper@gmail.com).
