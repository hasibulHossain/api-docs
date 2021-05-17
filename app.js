const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "BookSelf API",
        version: '1.0.0',
      },
    },
    apis: ["app.js"],
  };
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */

app.get('/books', (req, res) => {
    res.send([
        {
            id: 1,
            title: 'linux bible'
        }
    ])
})

/**
 * @swagger
 * /books:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */

app.post('/books', (req, res) => {
    res.status(201).send();
});

app.listen(5000, () => console.log('listeneing on port 5000'))