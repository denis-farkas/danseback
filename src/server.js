import express from "express";
import initRoutes from "./routes/init.routes.js";
import initMiddlewares from "./middlewares/init.middleware.js";

// Création de l'application Express
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "https://front-xi-wheat.vercel.app",
        "https://frontend-iyg3.vercel.app",
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
// Initialisation des middlewares (gestionnaires intermédiaires)
initMiddlewares(app);

// Initialisation des routes de l'application
initRoutes(app);

// Écoute du serveur sur le port spécifié
app.listen(PORT, () => {
  console.log("Le serveur écoute sur le PORT:", PORT);
});
