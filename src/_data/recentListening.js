import fetch from 'node-fetch';

export default async () => {
  try {
    const res = await fetch('https://patrick-thomas-dunn.vercel.app/', {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
};
