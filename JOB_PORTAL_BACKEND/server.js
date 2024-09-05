// packages imports
import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

// file imports
import connectDB from "./config/db.js";
import testroutes from "./routes/testroutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import jobsRoute from "./routes/jobsRoute.js";

//Security Packages
import helmet from "helmet";
import xss from "xss-clean";
import ExpressMongoSanitize from "express-mongo-sanitize";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from "swagger-jsdoc";

configDotenv();

//mongodb connection
connectDB();

const app = express();



// middlewares
app.use(helmet());
// cross-site
app.use(xss());
// db
app.use(ExpressMongoSanitize());

//limit ip


// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'A simple API documentation example',
    },
    servers: [
      {
        url: 'http://localhost:8080',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your API files
};



const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Middleware for Swagger UI
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(cors());

app.use("/api/v1/test", testroutes);
app.use("/api/user", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/job", jobsRoute);

// validation middleware
app.use(errorMiddleware);

// listen
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE}🔥${process.env.PORT}`
  );
});
