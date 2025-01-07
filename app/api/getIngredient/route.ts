import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}&nutrition-type=cooking`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from Edamam API");
    }

    const result = await response.json();
    console.log("Fetched result:", result); // Log the fetched result

    // Ensure the result is a valid JSON object
    if (typeof result !== 'object' || result === null) {
      throw new Error("Invalid JSON response");
    }

    return NextResponse.json(result.hints);
  } catch (error) {
    console.error('Error fetching ingredient data:', error);
    return NextResponse.json({ error: 'Failed to fetch ingredient data' }, { status: 500 });
  }
}