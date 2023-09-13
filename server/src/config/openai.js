// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

module.exports = class openai{
    static configuration(){
      const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});  
return new OpenAIApi(configuration)
    }
    static textCompletion(prompt){
        return openai.completions.create({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });
    }
}
