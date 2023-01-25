const express = require('express')
const app = express()
const port = 5000
require("dotenv").config();
const OpenAI = require('openai-api');
const OPENAI_API_KEY = process.env.API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

(async () => {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: 'this is a test',
        maxTokens: 5,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', "testing"]
    });

    console.log(gptResponse.data);
})();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

