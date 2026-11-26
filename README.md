# Komik REST API (Express + Sequelize + PostgreSQL + JWT)

REST API for managing comic books (`Komik`) with user authentication using **bcrypt** password hashing and **JSON Web Tokens (JWT)**, built with Node.js, Express, Sequelize ORM, and PostgreSQL.

## Project Structure

```text
.
├── config/
│   ├── config.js           # Sequelize database configuration from environment variables
│   └── db.js               # Database authentication & sync helper
├── controller/
│   ├── komikController.js  # CRUD handlers for Komik
│   └── userController.js   # Register & login handlers
├── middleware/
│   └── authMiddleware.js   # Bearer JWT verification middleware
├── migrations/
├── models/
│   ├── index.js            # Sequelize model loader
│   ├── komik.js            # Komik model
│   └── user.js             # User model
├── routes/
│   └── api.js              # Public and protected API routes
├── seeders/
├── services/
│   ├── hashService.js      # Bcrypt password hashing & comparison service
│   └── jwtService.js       # JWT generation & verification service
├── .env.example            # Environment variable template
├── .gitignore
├── .sequelizerc
├── index.js                # Express server entry point
└── package.json
```

## Services

- **`services/hashService.js`**:
  - `hashPassword(password)` — hashes plaintext passwords using `bcrypt` with 10 salt rounds.
  - `comparePassword(password, hashedPassword)` — verifies a plaintext password against a stored hash.
- **`services/jwtService.js`**:
  - `generateToken(payload)` — signs a JWT using `JWT_SECRET` and `JWT_EXPIRES`.
  - `verifyToken(token)` — verifies and decodes a JWT using `JWT_SECRET`.

## Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Create PostgreSQL database:**
   Create a PostgreSQL database named `perpustakaan` (or match `DB_DATABASE` in `.env`).
3. **Configure environment variables:**
   Copy `.env.example` to `.env` and update `DB_PASS` with your PostgreSQL password:
   ```env
   DB_USER=postgres
   DB_PASS=your_database_password
   DB_DATABASE=perpustakaan
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DIALECT=postgres

   JWT_SECRET=mySuperSecretKey123
   JWT_EXPIRES=1d
   ```
4. **Run the server:**
   ```bash
   npm start
   ```
   The API will run at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/register` | Public | Register a new user |
| `POST` | `/api/login` | Public | Authenticate user and return JWT |
| `GET` | `/api/komik` | Public | Get all komik |
| `GET` | `/api/komik/:id` | Public | Get a komik by ID |
| `POST` | `/api/komik` | Protected (Bearer Token) | Create a new komik |
| `PUT` | `/api/komik/:id` | Protected (Bearer Token) | Update a komik by ID |
| `DELETE` | `/api/komik/:id` | Protected (Bearer Token) | Delete a komik by ID |

## Postman Testing Screenshots

### 1. Register (`POST /api/register`)
<!-- Replace with your Postman screenshot for POST /api/register -->
![Register Screenshot](docs/screenshots/register.png)

### 2. Login (`POST /api/login`)
<!-- Replace with your Postman screenshot for POST /api/login -->
![Login Screenshot](docs/screenshots/login.png)

### 3. Create Komik (`POST /api/komik`)
<!-- Replace with your Postman screenshot for POST /api/komik -->
![Create Komik Screenshot](docs/screenshots/create-komik.png)

### 4. Get All Komik (`GET /api/komik`)
<!-- Replace with your Postman screenshot for GET /api/komik -->
![Get All Komik Screenshot](docs/screenshots/get-all-komik.png)

### 5. Get Komik by ID (`GET /api/komik/:id`)
<!-- Replace with your Postman screenshot for GET /api/komik/:id -->
![Get Komik By ID Screenshot](docs/screenshots/get-komik-by-id.png)

### 6. Update Komik (`PUT /api/komik/:id`)
<!-- Replace with your Postman screenshot for PUT /api/komik/:id -->
![Update Komik Screenshot](docs/screenshots/update-komik.png)

### 7. Delete Komik (`DELETE /api/komik/:id`)
<!-- Replace with your Postman screenshot for DELETE /api/komik/:id -->
![Delete Komik Screenshot](docs/screenshots/delete-komik.png)
