const db = require('../utils/db');

const jwtMessages = require('../constants/jwt');

class ProductController {

   async getProducts(req, res) {
      try {
         const requestProducts = await db.query(`SELECT * FROM pizzas`);
         const allProducts = requestProducts.rows;

         // заполняем данные о пицце из дочерних таблиц. Знаю что можно было лучше это написать, через json_agg и т.д, но это сложно :)
         for (let pizza of allProducts) {
            const type = await db.query(`SELECT meat, cheese, vegan, sharp FROM pizzas_types WHERE pizza_id = $1`, [pizza.id]);
            pizza.type = type.rows[0];

            const price = await db.query(`SELECT low, average, high FROM pizzas_price WHERE pizza_id = $1`, [pizza.id]);
            pizza.price = price.rows[0];

            const size = await db.query(`SELECT low, average, high FROM pizzas_size WHERE pizza_id = $1`, [pizza.id]);
            pizza.size = size.rows[0];

            const dough = await db.query(`SELECT traditional, thin FROM pizzas_dough WHERE pizza_id = $1`, [pizza.id]);
            pizza.dough = dough.rows[0];
         }

         res.status(200).json({
            products: allProducts,
            message: jwtMessages.success
         });

      } catch (error) {
         res.status(500).json({ message: jwtMessages.unexpected })
      }
   }

}

module.exports = new ProductController()