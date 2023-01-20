import express from "express";
import indexRoutes from "./routes/index";

const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log(`server en el puesto ${PORT}`);
});
