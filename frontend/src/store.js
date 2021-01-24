import { writable, derived } from 'svelte/store';
import Cookie from "js-cookie";

export const user = writable(checkLocalUser());
export const isLoggedIn = derived(user, $user => !!($user && $user.jwt ));

// on Page load or refresh get the user data from storage
export function checkLocalUser() {
  if( typeof window === undefined ) return null;
  return Cookie.getJSON("user") || null; 
}
