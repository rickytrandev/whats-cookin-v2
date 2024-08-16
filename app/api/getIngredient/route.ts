import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const response = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}&nutrition-type=cooking`
  );
  const result = await response.json();
  return NextResponse.json(result.hints);
}