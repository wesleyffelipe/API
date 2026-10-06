import express from "express";
import amostraRoutes from "./routes/amostraRoutes.js";

const app = express();

app.use(express.json());

app