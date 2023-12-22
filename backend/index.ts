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

app.use(express.json());

// app.get("/api/signin", async (req, res) => {
//   try {
//     const { rows } = await client.query("SELECT * FROM accounts");
//     res.json(rows);
//   } catch (error) {
//     console.error("Varning gick inte att inloggade: ", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.post("/api/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Användare och lösenord krävs");
    }
    const result = await client.query(
      "SELECT * FROM persons WHERE username = $1",
      [username]
    );
    if (result.rows.length === 0) {
      return res.status(401).send("fel användarnamn eller lösenord");
    }
    const user = result.rows[0];

    if (password === user.password) {
      res.status(200).json({
        message: "Grattis inloggningen lyckades!",
        user: {
          username: user.username,
          id: user.id,
        },
      });
    } else {
      res.status(401).send("Fel användarnamn eller lösenrod");
    }
  } catch (error) {
    console.error("Något gick fel: ", error);
    res.status(500).send("Internal Server error");
  }
});

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
app.post("/api/users", async (req, res) => {
  try {
    const postUserInfo = req.body;

    console.log("postUserInfo", postUserInfo);

    if (!postUserInfo) {
      return res.status(400).send("Ingen användarinfo skickad");
    }

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

// GET
// app.get("/api/edituser", async (_req, res) => {
//   try {
//     const { rows } = await client.query("SELECT * FROM persons");
//     res.json(rows);
//   } catch (error) {
//     console.error("Vaning gick inte att fetcha persons: ", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.get("/api/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).send("Id krävs");
    }

    const result = await client.query("SELECT * FROM persons WHERE id = $1", [
      userId,
    ]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send("Användaren hittades inte");
    }
  } catch (error) {
    console.log("Något gick fel", error);
    res.status(500).send("Internal Server error");
  }
});

//PUT
app.put("/api/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const updateUserInfo = req.body;
    if (!userId || !updateUserInfo) {
      return res.status(400).send("Id och användarinfo krävs");
    }
    const updateQuery = `UPDATE persons GET firstname = $1, lastname = $2, email = $3, username = $4 password = $5 WHERE id= $6 RETURNING *`;
    const values = [
      updateUserInfo.firstname || "",
      updateUserInfo.lastname || "",
      updateUserInfo.email || "",
      updateUserInfo.username || "",
      updateUserInfo.password || "",
      userId,
    ];

    const result = await client.query(updateQuery, values);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send("Användaren hittades inte");
    }
  } catch (error) {
    console.error("Något gick fel: ", error);
    res.status(500).send("Internal Server error");
  }
});

// DELETE

app.get("/api/accounts", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM accounts");
    res.json(rows);
  } catch (error) {
    console.error("Varning gick inte att fetcha accounts: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/courses", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM courses");
    res.json(rows);
  } catch (error) {
    console.error("Varning gick inte att fetcha courses: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/videos", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM videos");
    res.json(rows);
  } catch (error) {
    console.error("Varning gick inte att fetcha videos: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Välkommen till ${port}`);
});
