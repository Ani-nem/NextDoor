import express from "express";
import cors from "cors";
import {
    pool,
    createUser,
    validateUser,
    getCommissions,
    updateCommission,
    addCommission,
    getUser,
} from "./db.js";

const app = express();
const PORT = 2000;

// Enable CORS for all routes
app.use(
    cors({
        origin: ["http://localhost:3000", "https://localhost:8081"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Middleware for parsing JSON - this needs to be before your routes
app.use(express.json());

// API Endpoints

app.get("/user/:id", (req, res) => {
    getUser(req, res);
});

app.post("/user", (req, res) => {
    createUser(req, res);
});

app.post("/login", (req, res) => {
    validateUser(req, res);
});

app.get("/commission", (req, res) => {
    getCommissions(req, res);
});

app.get("/commission/myposts", (req, res) => {
    getMyCommissions(req, res);
});

app.post("/commission", (req, res) => {
    addCommission(req, res);
});

app.put("/commission", (req, res) => {
    updateCommission(req, res);
});

app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.status(200).send("Database connected");
    } catch (error) {
        console.error("Database connection error:", error.message, error.stack);
        res.status(500).send("Database connection failed");
    }
});

app.listen(PORT, () => {
    console.log("Server is running on port 2000");
});
