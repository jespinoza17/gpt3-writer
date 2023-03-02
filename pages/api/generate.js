import { Configuration, OpenAIApi } from "openai";
import { OpenAIStream } from "../../utils/OpenAIStream"

export const config = {
  runtime: 'edge',
}
const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(openaiConfig);

// update prompt to add character name
const basePromptPrefix = `Write an anime plot about the following: `;

// update this to an edge function
const generateAction = async (req) => {
  const { userInput } = await req.json();
  console.log(`API: ${basePromptPrefix}${userInput}`);
  const messages = [{ role: 'user', content: `${basePromptPrefix}${userInput}`}];
  
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: 0.9,
    stream: true,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export default generateAction;