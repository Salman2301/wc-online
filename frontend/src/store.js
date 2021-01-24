import { writable, derived } from 'svelte/store';

export const user = writable(checkLocalUser());
export const isLoggedIn = derived(user, $user => !!($user && $user.jwt ));

// on Page load or refresh get the user data from storage
function checkLocalUser() {
  if( typeof window === undefined ) return null;

  let storage = sessionStorage.getItem("user")

  if( typeof storage !== "string" ) return null;

  try { return JSON.parse(storage); }

  catch(e) { return null; }

}
