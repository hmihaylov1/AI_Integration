import express from "express";
import OpenAI from "openai";

const openai = new OpenAI();
const app = express();

app.use(express.static("frontend/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/:userQuestion", async (req, res) => {
  var userQuestion = req.params.userQuestion;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: userQuestion }],
    model: "gpt-3.5-turbo",
  });
  res.json(completion.choices[0].message.content);
});

app.listen(3000, () => {
  console.log(`express server running on http://localhost:3000`);
});
