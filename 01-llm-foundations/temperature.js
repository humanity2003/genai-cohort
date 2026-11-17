import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function main() {
    for(const temperature of [0,1,2]){
        for (let i = 0; i<3; i++){
            const response = await client.chat.completions.create({
                model: "gpt-4",
                temperature,
                messages:[{
                    role: "user",
                    content: "Suggest me a one-line name for a coffee shop"
                }]              
            })
            console.log(`Temperature: ${temperature}, Iteration: ${i+1}`);
            console.log(response.choices[0].message.content);
        }
    }
}

main();