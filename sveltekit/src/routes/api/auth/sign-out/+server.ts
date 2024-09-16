export function POST({ locals, cookies }) {
	locals.pb.authStore.clear();
	cookies.delete('token', { path: '/' });
	return new Response(null, { status: 204 });
}
