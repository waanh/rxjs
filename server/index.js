const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

const app = express();
const PORT = 3000;

app.use(cors());

const generateMessages = () => {
  const messages = [];
  const count = faker.number.int({ min: 0, max: 5 }); 

  for (let i = 0; i < count; i++) {
    messages.push({
      id: faker.string.uuid(),
      from: faker.internet.email(),
      subject: faker.lorem.words(3),
      body: faker.lorem.paragraph(),
      received: Math.floor(Date.now() / 1000) - faker.number.int({ min: 60, max: 3600 }),
    });
  }

  return messages;
};

app.get("/messages/unread", (req, res) => {
  res.json({
    status: "ok",
    timestamp: Math.floor(Date.now() / 1000),
    messages: generateMessages(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
