# **NodeJS and Express CRUD API with Sequelize and Postgre SQL**

NodeJS and Express for CRUD API with Sequelize and Database Postgre SQL

## **Running Project**
- Clone repo github
- Install library dependency with command 
```bash
$ npm install
```
- Install nodemon (optional) with command 
```bash
$ npm install nodemon --save--dev
```
- Running application with command
```bash
$ npm start
```

## **Test Project With Postman or Similar or Command Line**

### **Create Posting**
```json
curl --location 'http://localhost:8082/api/postings' \
--header 'Content-Type: application/json' \
--data '{
    "title": "posting number 3",
    "description": "posting testing number 3",
    "published": false
}'
```

### **Get All Postings**
```json
curl --location 'http://localhost:8082/api/postings'
```

### **Get Posting By ID**
```json
curl --location 'http://localhost:8082/api/postings/1'
```

### **Update One Posting**
```json
curl --location --request PUT 'http://localhost:8082/api/postings/2' \
--header 'Content-Type: application/json' \
--data '{
    "title": "posting number 2 updated",
    "description": "posting testing number 2 updated lagi",
    "published": true
}'
```

### **Get Posting Published**
```json
curl --location 'http://localhost:8082/api/postings/published'
```

### **Delete One Posting**
```json
curl --location --request DELETE 'http://localhost:8082/api/postings/2'
```

### **Delete All Postings**
```json
curl --location --request DELETE 'http://localhost:8082/api/postings'
```

### **Stop Project**
Tekan Ctrl + C 

### **Postman Collection**
```bash
https://www.postman.com/rochiyat-coding/workspace/share-api/collection/4389128-d42d769f-ad27-4e97-8677-0ab9b1b0155b?action=share&creator=4389128
```