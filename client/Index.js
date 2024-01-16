// 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
const { Configuration, OpenAIpi } = require("openai");
const configuration = new Configuration({
    organization: "org-r3cMJbvfEPf8dCKjY2gKDZ3P",
    apiKey: 
    "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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log(response.data.choices[0].text)
    res.json ({
        data: response.data
    })
}
callApi()

// create a simple express api that call

const express = require('express')
const app = express()
const port = 3000

app.post('/', async (req, res) => {
    // res.send('Hello World')
});
app.listen(port, ()  => {
    console.log('Example app listening at http:// localhost:${port}')
});


