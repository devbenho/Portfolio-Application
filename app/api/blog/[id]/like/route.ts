import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function POST(
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

    const result = await db
      .collection('blog')
      .updateOne({ _id: new ObjectId(id) }, { $inc: { likes: 1 } });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Get updated post
    const updatedPost = await db.collection('blog').findOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      message: 'Blog post liked successfully',
      likes: updatedPost?.likes || 0,
    });
  } catch (error) {
    console.error('Error liking blog post:', error);
    return NextResponse.json(
      { error: 'Failed to like blog post' },
      { status: 500 }
    );
  }
}
