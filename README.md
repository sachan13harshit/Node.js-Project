# Product API Documentation

Welcome to the Product API Documentation. This API allows you to interact with a dataset of products, enabling you to retrieve, filter, and sort product data.

## Setup

 **Clone the repository**

   ```sh
   git clone https://github.com/sachan13harshit/Node.js-Project.git
  ```
**Navigate to project repository**
```sh
   cd Node.js-Project
  ```
**Install Dependencies**
```sh
   npm init -y
   npm install express axios
  ```
**Run the server**
```sh
   node server.js
  ```


## Endpoints

### Get All Products

- **Description**: Retrieve the complete list of products.
- **Method**: `GET`
- **URL**: `/api/products`

### Get All Products Sorted by Name

- **Description**: Retrieve the list of products sorted by their name in ascending order.
- **Method**: `GET`
- **URL**: `api/products?sort=name`

### Get All Products Sorted by Version

- **Description**: Retrieve the list of products sorted by their version in ascending order.
- **Method**: `GET`
- **URL**: `api/products?sort=version`

### Get All Products Sorted by Language

- **Description**: Retrieve the list of products sorted by their language in ascending order.
- **Method**: `GET`
- **URL**: `api/products?sort=language`

#### Example Request

```sh
curl --location 'http://localhost:3000/api/products/sort=language'

[
  {
    "name": "Adeel Solangi",
    "language": "Sindhi",
    "id": "V59OF92YF627HFY0",
    "bio": "Donec lobortis eleifend condimentum...",
    "version": 6.1
  },
  ...
]




  

