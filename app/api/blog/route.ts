import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const posts = await db.collection('blog')
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body.title || !body.content || !body.excerpt) {
      return NextResponse.json(
        { error: 'Invalid blog post data' },
        { status: 400 }
      );
    }
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const result = await db.collection('blog').insertOne({
      ...body,
      likes: 0,
      comments: [],
      createdAt: new Date()
    });
    
    return NextResponse.json({ 
      message: 'Blog post created successfully',
      id: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}