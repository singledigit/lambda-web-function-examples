export const GET = ({ params }) =>
  Response.json({ id: params.id, name: `item-${params.id}`, framework: 'sveltekit' });

export const POST = async ({ params, request }) =>
  Response.json({ id: params.id, youSent: await request.json(), method: 'POST', at: new Date().toISOString() });
