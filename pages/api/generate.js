import { Configuration, OpenAIApi } from "openai";
import { OpenAIStream } from "../../utils/OpenAIStream"

export const config = {
  runtime: 'edge',
}
const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(openaiConfig);

const basePromptPrefix = `Write an anime plot about the following: `;

// update this to an edge function
const generateAction = async (req) => {
  const { userInput } = await req.json();
  console.log(`API: ${basePromptPrefix}${userInput}`);

  const payload = {
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${userInput}\n`,
    temperature: 0.9,
    max_tokens: 500,
    stream: true,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export default generateAction;