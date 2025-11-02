import express from "express";

const app = express();

app.use(express.static("public"))

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send("Hola")
})

app.get('/about', (req, res) => {
  res.send("Página About")
})

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))