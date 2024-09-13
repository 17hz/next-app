export const dynamic = 'force-dynamic'; // static by default, unless reading the request
// 设置 nodejs 运行时
export const runtime = 'nodejs';

export function GET() {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
