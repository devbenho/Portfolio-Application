import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');

    const projects = await db.collection('projects').find({}).toArray();

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    if (!body.title || !body.description || !body.image) {
      return NextResponse.json(
        { error: 'Invalid project data' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    const result = await db.collection('projects').insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: 'Project added successfully',
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding project:', error);
    return NextResponse.json(
      { error: 'Failed to add project' },
      { status: 500 }
    );
  }
}
