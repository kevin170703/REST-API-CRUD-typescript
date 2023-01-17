import express from "express";
import indexRoutes from "./routes/index";

const app = express();
const PORT: number = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log(`server en el puesto ${PORT}`);
});

// CREATE TABLE users(
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(40),
//   email TEXT
// );

// INSERT INTO users (name, email)
//   VALUES ('joe', 'joe@ibm.com'),
//          ('ryan', 'ryan@faztweb.com');
