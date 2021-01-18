<script context="module" >
  import axios  from "axios";
  import { get  } from 'svelte/store';
  import { isLoggedIn, user } from "@/store.js";

  export async function registerUser(registerOpts) {
    if( get(isLoggedIn) ) throw new Error("User is already logged In.");
    
    try {
      const URL = `${serverURL}/auth/local/register`;
      const { data } = await axios.post(URL, registerOpts);
      
      if( data && data.jwt ) user.set(data);

      return data;
    }
    catch(e) {
      console.log(e);
      throw e;
    }
  }

  export async function loginUser(loginOpts) {
    if( get(isLoggedIn) ) throw new Error("User is already logged In.");
    
    const URL = `${serverURL}/auth/local`;

    const res = await axios.post(URL, loginOpts);
    
    if( res && res.data && res.data.jwt ) user.set(res.data);

    return res;
  }

  export async function logOut() {
    user.set(null);
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
  }

  // set default headers for logged In user
  user.subscribe( userVal => {
    if (typeof window === "undefined") return;
    if ( !(userVal && userVal instanceof Object && userVal.jwt) ) return;
    
    const { jwt:token} = userVal ;
    const authHeader = `Bearer ${token}`;
    localStorage.setItem("user", JSON.stringify(userVal) );
    axios.defaults.headers.common["Authorization"] = authHeader;
  });

  // check if the user has a valid token. if not log out
  axios.interceptors.response.use(null, function (error) {
    if( typeof window !== "undefined" ) return;
    
    let { response: { status }, config: { currUrl } } = error;
    
    if (status !== 401 || status !== 403 )  return;
    
    const urlMe = `${serverURL}/users/me`;
    if( currUrl === urlMe) return;

    if ( !localStorage.getItem("user") ) return;

    axios.get(urlMe).catch(logOut);

    return Promise.reject(error);
  });

</script>