import cors from "cors"; // Importa cors para manejar permisos de acceso
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Importa las rutas
import equipoRoutes from "./routes/equipo.routes.js";
import resultadoRoutes from "./routes/resultado.routes.js"; // Importa las rutas para resultado
import partidoRoutes from "./routes/partido.routes.js"; // Importa las rutas para partido
import pronosticoRoutes from "./routes/pronostico.routes.js"; // Importa las rutas para pronóstico
import perfilRoutes from "./routes/perfil.routes.js"; // Importa las rutas para perfil
import usuarioRoutes from "./routes/usuario.routes.js";


// Define el módulo de ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: "*", // Permite todas las IPs
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true, // Permite credenciales
};

app.use(cors(corsOptions)); // Aplica configuración de CORS
app.use(express.json()); // Permite interpretar JSON en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true })); // Permite interpretar formularios codificados

// Rutas
app.use("/api", equipoRoutes); // Rutas para equipos
app.use("/api", resultadoRoutes); // Rutas para resultados
app.use("/api", partidoRoutes); // Rutas para partidos
app.use("/api", pronosticoRoutes); // Rutas para pronósticos
app.use("/api", perfilRoutes); // Rutas para perfiles
app.use("/api", usuarioRoutes); // Rutas para usuarios

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada",
  });
});

export default app;
