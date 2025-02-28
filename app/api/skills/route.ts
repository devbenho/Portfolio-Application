import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const skills = await db.collection('skills').find({}).toArray();
    
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body.category || !body.items || !Array.isArray(body.items)) {
      return NextResponse.json(
        { error: 'Invalid skill data' },
        { status: 400 }
      );
    }
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const result = await db.collection('skills').insertOne(body);
    
    return NextResponse.json({ 
      message: 'Skill added successfully',
      id: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding skill:', error);
    return NextResponse.json(
      { error: 'Failed to add skill' },
      { status: 500 }
    );
  }
}