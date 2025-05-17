export async function POST(req) {
  try {
    const body = await req.json()

    const GOOGLE_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbxUXQKm6mI4sSFf1OtGUGfjD5FiNiE1LnKbpCHTlTH9z3nDdKS_VXjymgBkXLkeeiCk5w/exec '
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
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
