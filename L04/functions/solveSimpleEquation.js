// Function to solve the equation of a line given two points
const execute = async (point1, point2) => {
    try {
        // Validate input
        if (!Array.isArray(point1) || point1.length !== 2 ||
            !Array.isArray(point2) || point2.length !== 2) {
            throw new Error("Each point must be an array of two numbers [x, y].");
        }

        // Get the x and y coordinates for each point
        const [x1, y1] = point1;
        const [x2, y2] = point2;

        // Verify that the x-coordinates are different
        if (x2 === x1) {
            throw new Error("The x-coordinates of both points must be different to avoid division by zero.");
        }

        // Calculate the slope and y-intercept of the line
        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;

        // Construct the equation of the line
        const equation = `y = ${m}x + ${b}`;
    
        return equation;
    } catch (err) {
        console.error('Error solving equation:', err.message);
        return { error: err.message };
    }
};

// OpenAPI schema details for the function
const details = {
    "type": "function",
    function: {
        "name": "solveSimpleEquation",
        "parameters": {
            "type": "object",
            "properties": {
                "point1": {
                    "type": "array",
                    "description": "x and y coordinates for point 1",
                    "items": {
                        "type": "number"
                    },
                    "minItems": 2,
                    "maxItems": 2
                },
                "point2": { 
                    "type": "array",
                    "description": "x and y coordinates for point 2",
                    "items": {
                        "type": "number"
                    },
                    "minItems": 2,
                    "maxItems": 2
                },
            },
            "required": ["point1", "point2"]
        },
    },
    "description": "Given 2 points, solve the equation of the line that passes through them",
};

export { execute, details };
