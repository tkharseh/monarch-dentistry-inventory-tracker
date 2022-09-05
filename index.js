import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import tablesRoutes from "./routes/tables.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tables", tablesRoutes);
app.get("/", (req, res) => {
  res.send("Inventori backend API is up and running!");
});

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error.message));

export default app;
