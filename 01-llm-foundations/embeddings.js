import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main(text) {
    const response = await client.embeddings.create({
        model: "text-embedding-3-small",
        input: text
    })

    return response.data[0].embedding;
}

const vector = await main("How do vector databases work?");
console.log(vector);