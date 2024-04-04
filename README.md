# BookWise API

BookWise is a simple, lightweight API built on Node.js, providing easy access to book information by ISBN, title, or author. Leveraging the Open Library API, BookWise aims to deliver book data efficiently to your application.

## Features

- **Get Book by ISBN**: Fetch detailed information about a book using its ISBN.
- **Search Book by Title**: Retrieve information on books matching a given title.
- **Find Books by Author**: Get a list of books written by a specified author.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js installed on your system to run the API. The API has been tested with Node.js version 14.x. You can download Node.js [here](https://nodejs.org/).

### Installing

Clone the repository to your local machine:

```sh
git clone https://github.com/hipnologo/BookWise.git
cd BookWise
```
Install the required dependencies:
```sh
npm install
```
Start the server:
```sh
node server.js
```
The server will start on port 3001 by default. You can access the API at `http://localhost:3001`.

## Usage
### Get Book by ISBN
URL: `/isbn/:isbn`
Method: `GET`
URL Params: `isbn=[string]`
Success Response: A JSON object containing book information.

### Search Book by Title
URL: `/title/:title`
Method: `GET`
URL Params: `title=[string]`
Success Response: A JSON object containing the first book matching the title.

### Find Books by Author
URL: `/author/:author`
Method: `GET`
URL Params: `author=[string]`
Success Response: An array of JSON objects, each containing information about one book by the author.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.
