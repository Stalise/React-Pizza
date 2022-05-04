const db = require('../utils/db');

class ProductController {

   async getProducts(req, res) {

      try {

         const requestProducts = await db.query(`SELECT * FROM pizzas`)
         const allProducts = requestProducts.rows

         // console.log(allProducts)

         // заполняем данные о пицце из дочерних таблиц. Знаю что можно было лучше это написать, через json_agg и т.д, но это сложно :)
         for (let i of allProducts) {
            i.type = await (await db.query(`SELECT meat, cheese, vegan, sharp FROM pizzas_types WHERE pizza_id = $1`, [i.id])).rows[0]
            i.price = await (await db.query(`SELECT low, average, high FROM pizzas_price WHERE pizza_id = $1`, [i.id])).rows[0]
            i.size = await (await db.query(`SELECT low, average, high FROM pizzas_size WHERE pizza_id = $1`, [i.id])).rows[0]
            i.dough = await (await db.query(`SELECT traditional, thin FROM pizzas_dough WHERE pizza_id = $1`, [i.id])).rows[0]
         }

         // console.log(allProducts)
         res.json(allProducts)

      } catch (error) {
         res.send(500)
      }
   }

}

module.exports = new ProductController()