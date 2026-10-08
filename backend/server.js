const express = require("express");
const app = express();

// Reto 02: Puedes probar cambiando a 3001 y luego regresarlo a 3000
const PORT = 3000;

// Reto 01 - Ruta 1: Nombre del sistema
app.get("/", (req, res) => {
    res.send("Bienvenido a VisualSync - Sistema Web de Gestión Fotográfica");
});

// Reto 01 - Ruta 2: Breve descripción del sistema
app.get("/info", (req, res) => {
    res.send("Plataforma web para la gestión de portafolios fotográficos, agendamiento de sesiones, validación de pagos mediante QR y entrega segura de fotografías en alta resolución.");
});

// Reto 01 - Ruta 3: Información de contacto ficticia
app.get("/contacto", (req, res) => {
    res.send("Correo: contacto@visualsync.bo | Teléfono: +591 70000000 | Cochabamba, Bolivia");
});

// Reto 03 - Conectar la idea con el proyecto (Funcionalidades principales)
app.get("/reservas", (req, res) => {
    res.send("Módulo de reservas de sesiones fotográficas y validación de comprobantes QR");
});

app.get("/galerias", (req, res) => {
    res.send("Módulo de galerías de clientes y descarga de fotografías en alta resolución");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});