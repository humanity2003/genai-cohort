import { getEncoding, encodingForModel } from "js-tiktoken";

const encoding = encodingForModel("gpt-4");
const text = "Hello, how are you?";
const tokens = encoding.encode(text);
console.log(tokens);
console.log(`Number of tokens: ${tokens.length}`);

console.log(encoding.decode(tokens));

