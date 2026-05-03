import { NextResponse } from 'next/server';
import { tiles } from '@/data/tiles';

export async function GET() {
  return NextResponse.json(tiles);
}
