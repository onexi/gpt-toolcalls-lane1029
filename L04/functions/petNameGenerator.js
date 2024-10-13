// Function to generate pet names based on animal type and personality type
const execute = async (animalType, personalityType) => {
    try {
        // Validate input
        if (!animalType || !personalityType) {
            return "Error: Both animalType and personalityType are required.";  // Return error as a string
        }

        // Define the animals data structure
        const animals = {
            "dog": {
                "serious": ["Major", "Echo", "Shadow"],
                "playful": ["Ziggy", "Wiggles", "Noodle"],
                "intelligent": ["Newton", "Watson", "Cognito"],
                "curious": ["Wander", "Snoop", "Dash"],
                "loyal": ["Faith", "Trust", "Fidel"],
                "energetic": ["Bolt", "Zap", "Flash"]
            },
            "cat": {
                "independent": ["Zara", "Rogue", "Vesper"],
                "affectionate": ["Smootch", "Sweet Pea", "Winnie"],
                "curious": ["Curi", "Fidget", "Puzzle"],
                "playful": ["Zoom", "Flick", "Pounce"],
                "graceful": ["Grace", "Daphne", "Poise"]
            },
            "bird": {
                "friendly": ["Pippin", "Tweety", "Joy"],
                "vocal": ["Melody", "Canta", "Bard"],
                "colorful": ["Vivid", "Skittles", "Fresco"],
                "curious": ["Peek", "Snoop", "Spy"]
            },
            "fish": {
                "calm": ["Sandy", "Tranquil", "Zen"],
                "shy": ["Misty", "Wisp", "Blush"],
                "playful": ["Zippy", "Buggles", "Doodle"],
                "colorful": ["Rainbow", "Spectrum", "Chroma"],
                "graceful": ["Sway", "Glide", "Float"]
            },
            "rabbit": {
                "playful": ["Whiskers", "Binky", "Frolic"],
                "energetic": ["Thumper", "Snowball", "Bounce"],
                "friendly": ["Waffle", "Smudge", "Clover"],
                "shy": ["Bashful", "Dewey", "Shade"]
            }
        };

        // Normalize input to lowercase to handle case sensitivity
        const normalizedAnimalType = animalType.toLowerCase();
        const normalizedPersonalityType = personalityType.toLowerCase();

        // Check if the animalType is valid
        if (!animals[normalizedAnimalType]) {
            const validTypes = Object.keys(animals).join(", ");
            return {
                error: `Sorry! I can only generate names for the following animals: ${validTypes}.`
            };  // Return error as an object
        }

        // Check if the personalityType is valid for the given animalType
        if (!animals[normalizedAnimalType][normalizedPersonalityType]) {
            const validPersonalities = Object.keys(animals[normalizedAnimalType]).join(", ");
            return {
                error: `Sorry! I don't have any suggestions for that personality type. You can try: ${validPersonalities}.`
            };  // Return error as an object
        }

        // Generate the list of pet names
        const petNames = `Here are some names for a ${normalizedPersonalityType} ${normalizedAnimalType}: ` + 
                         animals[normalizedAnimalType][normalizedPersonalityType].join(", ");
        return petNames;

    } catch (err) {
        console.error('Error generating name:', err.message);
        return `Error: ${err.message}`;  // Return the error message as a string
    }
};

// OpenAPI schema details for the function
const details = {
    "type": "function",
    "function": {
        "name": "petNameGenerator",
        "parameters": {
            "type": "object",
            "properties": {
                "animalType": {
                    "type": "string",
                    "description": "The type of animal for which to generate a pet name",
                },
                "personalityType": {
                    "type": "string",
                    "description": "The personality type of the pet",
                },
            },
            "required": ["animalType", "personalityType"],
        },
    },
    "description": "Given an animal type and personality type, generates a list of pet names.",
};

export { execute, details };
