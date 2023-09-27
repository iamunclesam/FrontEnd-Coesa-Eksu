// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const chatGptController = require('./chatGpt.controller');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post('/chatbot', chatGptController.askToChatGpt);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatGptController = require('./chatGpt.controller');

const app = express();
app.use(cors({
  origin: 'coesaeksu.netlify.app', // Replace with your frontend's domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // This enables cookies and authentication headers to be sent
}));
app.use(bodyParser.json());

app.post('/chatbot', chatGptController.askToChatGpt);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
