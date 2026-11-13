import openAI from 'openai';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env file

//import.meta.url gives the file's own URL (e.g. file:///.../01-llm-foundations/hello.js). This converts it to a normal path and takes just the directory part — so __dirname = the 01-llm-foundations folder, regardless of where you run the script from.
// We use it to determine the directory of the current file so we can correctly locate the .env file.
const __dirname = dirname(fileURLToPath(import.meta.url));

//Explicitly tells dotenv to load .env from one level up (..) from this file — i.e., the repo root — instead of guessing based on cwd.
config({ path: join(__dirname, '..', '.env') });

const client = new openAI({
    apiKey: process.env.OPENAI_API_KEY,
})

client.chat.completions.create({
    model: 'gpt-4',
    messages: [
        {role: 'user', content: 'Hello, how are you?'}
    ]
}).then(response => {
    console.log(response);
}).catch(err => {
    console.error(err);
})