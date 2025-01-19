import e from "express";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "Leia",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "nextdoor",
});

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const createUser = async (req, res) => {
  const { name, longitude, latitude, email, password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, longitude, latitude, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, longitude, latitude, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const validateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    if (result.rows.length === 0) {
      return res.status(401).send("Invalid email or password");
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const getCommissions = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM commissions");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const addCommission = async (req, res) => {
  const { title, description, longitude, latitude, radius, time, user_id } =
    req.body;
  try {
    const result = await pool.query(
      "INSERT INTO commissions (title, description, longitude, latitude, radius, time, user_id, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        title,
        description,
        longitude,
        latitude,
        radius,
        time,
        user_id,
        "INCOMPLETE",
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const updateCommission = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT status FROM commissions WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Commission not found");
    }

    const currentStatus = result.rows[0].status;
    let newStatus;

    switch (currentStatus) {
      case "INCOMPLETE":
        newStatus = "IN PROGRESS";
        break;
      case "IN PROGRESS":
        newStatus = "COMPLETE";
        break;
      default:
        return res.status(400).send("Invalid status transition");
    }

    const updateResult = await pool.query(
      "UPDATE commissions SET status = $1 WHERE id = $2 RETURNING *",
      [newStatus, id]
    );
    res.status(200).json(updateResult.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export {
  pool,
  createUser,
  validateUser,
  getCommissions,
  updateCommission,
  addCommission,
  getUser,
};
