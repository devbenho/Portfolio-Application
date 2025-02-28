import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');

    const learningItems = await db.collection('learning').find({}).toArray();

    return NextResponse.json(learningItems);
  } catch (error) {
    console.error('Error fetching learning items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch learning items' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    if (!body.title || !body.description || !body.progress) {
      return NextResponse.json(
        { error: 'Invalid learning item data' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    const result = await db.collection('learning').insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: 'Learning item added successfully',
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding learning item:', error);
    return NextResponse.json(
      { error: 'Failed to add learning item' },
      { status: 500 }
    );
  }
}
