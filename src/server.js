import express from "express";
import initRoutes from "./routes/init.routes.js";
import initMiddlewares from "./middlewares/init.middleware.js";

// Création de l'application Express
const app = express();
const PORT = 5000;

// Initialisation des middlewares (gestionnaires intermédiaires)
initMiddlewares(app);

// Initialisation des routes de l'application
initRoutes(app);

// Écoute du serveur sur le port spécifié
app.listen(PORT, () => {
  console.log("Le serveur écoute sur le PORT:", PORT);
});

export default app;
