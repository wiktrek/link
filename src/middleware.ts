import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  const slug = req.nextUrl.pathname.split('/').pop();
  if (req.nextUrl.pathname.startsWith('/')) {
    const a = `${req.nextUrl.origin}/api/redirect/${slug}`;
    console.log(a);
    return NextResponse.rewrite(new URL(a));
  }
}
