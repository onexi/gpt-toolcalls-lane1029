# FunctionAgents

## solveSimpleEquation
This function takes two points as arrays and solved for the intercept and slope. We assume the line is linear for this equation and return an equation of the form y=mx+b.

### Suggested Prompts:

- What is the equation for the line intersecting (-1, 3) and (4, 8)?
- Solve for the equation between the points (1, 2) and (10, 110).

## horoscopeGenerator
This function takes a zodiac sign (Capricorn, Leo, etc.) and rondomly selects a topic for a horoscope. It then calls the OpenAI API and asks it to generate a horoscope with the zodiac sign and topic. Once it returns a horoscope, the function cleans up the text and returns the full response.

### Suggested Prompts:
 
 - What is the horoscope for a Leo?
 - Tell me about the horoscope for a Capricorn.

## petNameGenerator
This function takes an animal type and personality and returns a list of potential names

### Suggested Prompts:

- What is a good name for a playful dog?
- What should I name my shy rabbit?
