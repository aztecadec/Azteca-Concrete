/**
 * Azteca Concrete Decoration — Google Cloud TTS Cloudflare Worker
 *
 * Environment variable (set in CF dashboard under Settings → Variables & Secrets):
 *   GOOGLE_TTS_API_KEY  — your Google Cloud API key (restricted to Cloud TTS API)
 */

const CORS = (origin) => ({
  'Access-Control-Allow-Origin': origin || '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // ── Preflight ──────────────────────────────────────────
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS(origin) });
    }

    if (request.method !== 'GET') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    // ── Read name from query param ─────────────────────────
    const url  = new URL(request.url);
    const name = (url.searchParams.get('name') || '').trim();

    const displayName = name
      ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      : '';

    // ── Build message ──────────────────────────────────────
    const message = displayName
      ? `Thank you ${displayName}! We have received your information and will be calling you back very soon. The team at Azteca Concrete Decoration looks forward to working on your project!`
      : `Thank you for reaching out! We have received your information and will be calling you back very soon. The team at Azteca Concrete Decoration looks forward to working on your project!`;

    // ── Call Google Cloud TTS ──────────────────────────────
    const apiKey = env.GOOGLE_TTS_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Missing GOOGLE_TTS_API_KEY' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...CORS(origin) } }
      );
    }

    const ttsResponse = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text: message },
          voice: {
            languageCode: 'en-US',
            name: 'en-US-Neural2-F',   // Natural female voice — free tier
          },
          audioConfig: {
            audioEncoding: 'MP3',
            speakingRate: 0.95,
            pitch: 1.0,
          },
        }),
      }
    );

    if (!ttsResponse.ok) {
      const errText = await ttsResponse.text();
      console.error('Google TTS error:', ttsResponse.status, errText);
      return new Response(
        JSON.stringify({ error: 'TTS failed', detail: errText }),
        { status: 502, headers: { 'Content-Type': 'application/json', ...CORS(origin) } }
      );
    }

    const { audioContent } = await ttsResponse.json();

    // ── Decode base64 and return as audio ──────────────────
    const binary = atob(audioContent);
    const bytes  = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    return new Response(bytes.buffer, {
      status: 200,
      headers: {
        ...CORS(origin),
        'Content-Type':  'audio/mpeg',
        'Cache-Control': 'no-store',
      },
    });
  },
};
