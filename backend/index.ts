//@ts-check
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "pg";
import express from "express";

const port = process.env.PORT || 3000;

dotenv.config();

require("dotenv").config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

const app = express();

app.use(cors());

// GET
app.get("/api/users", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM persons");
    res.json(rows);
  } catch (error) {
    console.error("Vaning gick inte att fetcha persons: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//POST
app.post("/api/createuser", async (req, res) => {
  const postUserInfo = req.body;
  try {
    const { firstname, lastname, email, username, password } = postUserInfo;
    if (!firstname || !lastname || !email || !username || !password) {
      return res.status(400).send("Alla fält är inte ifyllda");
    }
    const postQuery = ` INSERT INTO persons (firstname, lastname, email, username, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;

    const values = [firstname, lastname, email, username, password];
    const result = await client.query(postQuery, values);

    if (result.rows.length > 0) {
      res.status(201).json(result.rows[0]);
    } else {
      res.status(500).send("Misslyckades med att lägga in användarinfo");
    }
  } catch (error) {
    console.error("Error går ej att posta:", error);
    res.status(500).send("Internal Server Error");
  }
});

// PUT

// DELETE

app.get("/api/accounts", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM accounts");
    res.json(rows);
  } catch (error) {
    console.error("Vaning gick inte att fetcha courses: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/courses", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM courses");
    res.json(rows);
  } catch (error) {
    console.error("Vaning gick inte att fetcha courses: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/videos", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM videos");
    res.json(rows);
  } catch (error) {
    console.error("Vaning gick inte att fetcha videos: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Välkommen till ${port}`);
});
