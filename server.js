const { response } = require('express');
const express = require('express');
const app = express();
const { Restaurant } = require('./models');
const port = 3000;

app.get('/restaurants', async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant)
})

// app.post('/restaurants', async (req, res) => {
//     const { name, location, cuisine} = req.body;
//     const restaurant = await Restaurant.create({name, location, cuisine})
//     res.send(restaurant);
// })


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
