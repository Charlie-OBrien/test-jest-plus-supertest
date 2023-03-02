const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");  //  PROD ONLY

const ProductRoutes = require("./routes/product.route");

const app = express();

//  PROD ONLY limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP address to 100 requests in a 15 min duration
});

// requests of content-type - application/json
app.use(express.json());

// requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/*  Middlewares  */
app.use(morgan("common"));  //  logging to terminal
app.use(helmet());  //  security focused
app.use(cors());  //  cross-origin resource sharing
app.use(limiter); //  limit requests PROD only



app.get("/", (request, response) => {
  response.status(200).json({ alive: "True" });
});


app.use("/api", ProductRoutes);

module.exports = app;