export async function POST(req) {
  try {
    const body = await req.json()

    const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbzJ6_xgbAd5IBmeHfFW6IpFDFUBn_FnMr3bDgzipAYOy2rmYcQbjb4ZdjdFdWAei-LQzQ/exec'
    // Forward the request to the Google Apps Script URL
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    // Return the response to the frontend
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
