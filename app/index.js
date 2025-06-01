const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const now = new Date();
const { exec } = require("child_process");
const app = express();
const PORT = 8000;
const API_KEY = '1b6403a9e4ee05c3931ec18414bb9ce2';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async (req, res) => {
  exec("cat author", (error, stdout, stderr) => {
    if (error) { return res.status(500).send(`Błąd: ${error.message}`); }
    if (stderr) { return res.status(500).send(`Błąd: ${stderr}`); }
    console.log(`${now.toISOString()}, ${stdout}, port ${PORT}`)
  })

  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'Brak miasta' });

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pl`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200 && data.cod !== "200") {
      return res.status(404).json({ error: data.message });
    }

    res.json({
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    });
  } catch (err) {
    console.error('Błąd pobierania danych pogodowych:', err);
    res.status(500).json({ error: 'Błąd serwera podczas pobierania pogody.' });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
