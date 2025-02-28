import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid blog post ID' },
        { status: 400 }
      );
    }

    if (!body.name || !body.content) {
      return NextResponse.json(
        { error: 'Name and comment content are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    const comment = {
      id: new ObjectId().toString(),
      name: body.name,
      content: body.content,
      createdAt: new Date(),
    };

    const result = await db.collection('blog').updateOne(
      { _id: new ObjectId(id) },
      {
        $push: { comments: comment },
        $inc: { commentCount: 1 },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Comment added successfully',
        comment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid blog post ID' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    const post = await db
      .collection('blog')
      .findOne({ _id: new ObjectId(id) }, { projection: { comments: 1 } });

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post.comments || []);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}
