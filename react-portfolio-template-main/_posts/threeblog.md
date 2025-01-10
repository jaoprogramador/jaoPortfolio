---
date: "2025-01-09T17:00:00.000Z"
title: Introduction to MongoDB
tagline: MongoDB – The most popular NoSQL database.
preview: >-
  MongoDB is a document-oriented NoSQL database that provides flexibility and
  scalability for modern applications. It stores data in JSON-like documents
  with optional schemas.
image: >-
  https://images.unsplash.com/photo-1640017955477-75b58521007d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
---

# Getting Started with MongoDB

**MongoDB** is a NoSQL database that uses a flexible, schema-less data model, making it a popular choice for modern, scalable applications. Data is stored in **collections** as JSON-like **documents**, making it easy to work with dynamic data.

## Why Choose MongoDB?

1. **Flexibility**: Store structured, semi-structured, or unstructured data.
2. **Scalability**: Horizontal scaling via sharding.
3. **High Performance**: Fast queries with indexes.
4. **Rich Ecosystem**: Drivers for multiple programming languages.

### Setting Up MongoDB

To start using MongoDB, follow these steps:

1. Install MongoDB Community Edition from the [official website](https://www.mongodb.com/try/download/community).
2. Start the MongoDB server using the `mongod` command.
3. Use the MongoDB shell (`mongosh`) or any client like Compass to interact with the database.

#### Example: Inserting a Document

Here’s how you can insert a document into a collection:

```javascript
db.users.insertOne({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  interests: ["coding", "reading", "gaming"]
});
```

## Images

![An old rock in the desert](https://images.unsplash.com/photo-1654475677192-2d869348bb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
