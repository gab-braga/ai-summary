import "dotenv/config";

async function request() {
    const response = await fetch("https://api.openai.com/v1/models", { headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "OpenAI-Organization": process.env.OPENAI_ORGANIZATION,
        "OpenAI-Project": process.env.OPENAI_PROJECT
    } });
    console.log(response);
}

request();