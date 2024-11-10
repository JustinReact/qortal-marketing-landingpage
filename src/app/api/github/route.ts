// app/api/github/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const githubResponse = await axios.get('https://api.github.com/repos/Qortal/Qortal-Hub/releases/latest', {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`, // Server-only environment variable
      },
    });
    return NextResponse.json(githubResponse.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching GitHub data' }, { status: 500 });
  }
}
