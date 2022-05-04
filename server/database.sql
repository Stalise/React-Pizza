
create TABLE person(
   id SERIAL PRIMARY KEY,
   email VARCHAR(255),
   password VARCHAR(255),
   token VARCHAR(255) DEFAULT ''
);

/* main table */
create TABLE pizzas(
   id VARCHAR(255) PRIMARY KEY,
   name VARCHAR(255),
   img VARCHAR(255)
);

create TABLE pizzas_types(
   id SERIAL PRIMARY KEY,
   meat BOOLEAN DEFAULT false,
   cheese BOOLEAN DEFAULT false,
   vegan BOOLEAN DEFAULT false,
   sharp BOOLEAN DEFAULT false,
   pizza_id VARCHAR(255),
   FOREIGN KEY (pizza_id) REFERENCES pizzas (id) ON DELETE CASCADE
);

create TABLE pizzas_price(
   id SERIAL PRIMARY KEY,
   low INTEGER,
   average INTEGER,
   high INTEGER,
   pizza_id VARCHAR(255),
   FOREIGN KEY (pizza_id) REFERENCES pizzas (id) ON DELETE CASCADE
);

create TABLE pizzas_size(
   id SERIAL PRIMARY KEY,
   low INTEGER DEFAULT 25,
   average INTEGER DEFAULT 30,
   high INTEGER DEFAULT 35,
   pizza_id VARCHAR(255),
   FOREIGN KEY (pizza_id) REFERENCES pizzas (id) ON DELETE CASCADE
);

create TABLE pizzas_dough(
   id SERIAL PRIMARY KEY,
   traditional BOOLEAN DEFAULT true,
   thin BOOLEAN DEFAULT true,
   pizza_id VARCHAR(255),
   FOREIGN KEY (pizza_id) REFERENCES pizzas (id) ON DELETE CASCADE
);