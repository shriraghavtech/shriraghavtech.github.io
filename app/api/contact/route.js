// app/api/contact/route.js
export async function POST(request) {
  const body = await request.json();
  console.log("Contact form submission:", body);
  return Response.json({ success: true, message: "Contact inquiry received." });
}
