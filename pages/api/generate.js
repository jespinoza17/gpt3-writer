import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const basePromptPrefix = `Write a speech by Naruto Uzumaki to motivate someone in this situation: `;

const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  //call the api
  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.9,
    max_tokens: 500,
  });

  // second api call for prompt chainging (if needed)

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({output: basePromptOutput});
};

export default generateAction;