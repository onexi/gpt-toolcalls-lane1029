import { OpenAI} from 'openai';
import dotenv from 'dotenv';
dotenv.config();

// OpenAI API configuration
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Horoscope Generator with Random Topic Selection
const execute = async (zodiacSign) => {
    try {
        // List of possible horoscope topics
        const topics = ["love", "career", "health", "finance", "relationships", "adventure", "personal growth"];
        
        // Randomly select one topic
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];

        // Prompt OpenAI to generate the horoscope
        const horoscope = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: `You are a horoscope generator that provides daily horoscopes based on a zodiac sign and a specific topic.`
                },
                {
                    role: "user",
                    content: `Generate a horoscope for ${zodiacSign} about ${randomTopic}.`
                }
            ],
            max_tokens: 150
        });

        // Clean up the generated horoscope by removing newlines
        const cleanedHoroscope = horoscope.choices[0].message.content.replace(/\n/g, ' ');

        // Return the generated horoscope and topic
        return {
            zodiacSign,
            topic: randomTopic,
            horoscope: cleanedHoroscope
        };
    } catch (err) {
        console.error('Error generating horoscope:', err);
        return "There was an error generating your horoscope. Please try again.";
    }
};

// Updated Function Schema
const details = {
    "type": "function",
    function: {
        "name": "horoscopeGenerator",
        "description": "Generates a daily horoscope based on the zodiac sign and a randomly selected topic",
        "parameters": {
            "type": "object",
            "properties": {
                "zodiacSign": {
                    "type": "string",
                    "description": "The user's zodiac sign (e.g., Aries, Taurus, Gemini, etc.)"
                }
            },
            "required": ["zodiacSign"]
        },
        "returns": {
            "type": "object",
            "properties": {
                "zodiacSign": {
                    "type": "string",
                    "description": "The user's zodiac sign"
                },
                "topic": {
                    "type": "string",
                    "description": "The topic for the horoscope"
                },
                "horoscope": {
                    "type": "string",
                    "description": "The generated daily horoscope based on the zodiac sign and topic"
                }
            }
        }
    }
};

export { execute, details };
