import type { APIRoute } from 'astro';

const githubUrl = 'https://raw.githubusercontent.com/michiapp/michi/main/uninstall.sh';

export const GET: APIRoute = async ({ _ }) => {
  const res = await fetch(githubUrl);

  if (!res.ok) {
    return new Response('Failed to fetch uninstall script, try to download it from github instead!', { status: 500 });
  }

  const text = await res.text();

  return new Response(text, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  });
};
