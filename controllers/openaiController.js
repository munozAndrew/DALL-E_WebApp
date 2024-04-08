const OpenAIApi = require("openai");

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateImage = async (req, res) => {
  const {prompt, size } = req.body;
  
  const imageSize = size === 'Square' ? '1024x1024' : size === "Portrait" ? '1024x1792' :'1792x1024';


  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: imageSize,
    });

    imageUrl = response.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: "image could not be created",
    });
  }
};

module.exports = { generateImage };
