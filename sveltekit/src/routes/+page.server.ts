export async function load({ locals }) {
	const pb = locals.pb;
  return {
    user: pb.authStore.model
  }
}
