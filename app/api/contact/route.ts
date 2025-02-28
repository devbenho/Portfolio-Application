import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const result = await db.collection('contacts').insertOne({
      ...body,
      status: 'new',
      createdAt: new Date()
    });
    
    return NextResponse.json({ 
      message: 'Contact request submitted successfully',
      id: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact request:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact request' },
      { status: 500 }
    );
  }
}