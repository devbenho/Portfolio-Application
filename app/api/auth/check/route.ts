import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET() {
  try {
    const token = cookies().get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Verify token
    verify(token, JWT_SECRET);

    return NextResponse.json({ authenticated: true });
  } catch (_error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
