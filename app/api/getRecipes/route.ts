import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

interface CompletionChoice {
  message: {
    content: string | null;
  };
}

interface CompletionResponse {
  choices: CompletionChoice[];
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { ingredients, cookingMethod } = await request.json();
    
    const completion: CompletionResponse = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `I want to discover tasty recipes to cook. I have ingredients on hand that I want to use. Generate 3 recipes for me based on these ingredients: ${ingredients}. I want to use this desired cooking method: ${cookingMethod}. The recipe does not have to include all ingredients i've given, but they should all pair nicely together. Please return the response as a JSON array where each element is an object containing the recipe name and a short description. Example format: [{ "title": "Recipe 1", "description": "Description 1" }, { "title": "Recipe 2", "description": "Description 2" }, { "title": "Recipe 3", "description": "Description 3" }].`,
        },
      ],
      model: "gpt-4o-mini",
    });

    let response = completion.choices?.[0]?.message?.content;
    
    if (!response) {
      throw new Error("No response from OpenAI");
    }

    // Remove backticks if present
    response = response.replace(/```json|```/g, "").trim();

    try {
      const jsonResponse = JSON.parse(response); // Validate JSON
      return NextResponse.json(jsonResponse);
    } catch (error) {
      console.error("Invalid JSON response:", response);
      throw new Error("Invalid JSON response");
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 });
  }
}