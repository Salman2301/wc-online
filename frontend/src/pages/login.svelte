<script>
  import { onMount } from "svelte";
  import { get  } from 'svelte/store';
  import { goto, url } from "@roxi/routify";
  import { isLoggedIn } from "../store.js";
  import { loginUser } from "./_component/module/Auth.svelte";
  import Title from "./_component/basic/Title.svelte";
  import Form from "./_component/form/Form.svelte";
  import Input from "./_component/form/Input.svelte";
  import ErrorText from "./_component/form/ErrorText.svelte";
  import SubmitBtn from "./_component/form/SubmitBtn.svelte";

  let formData = {
    identifier: "",
    password: "",
  }

  let errorMsg = "";
  let showError = false;
  let disableSubmit = false;
  let ErrorMsgEl;

  isLoggedIn.subscribe(val=>{ if(val) $goto("/"); });

  onMount(() =>{
    if( get(isLoggedIn) ) {
      $goto("/");
    }
  })

  // register the User
  const handleOnSubmit = async e => {
    try {
      disableSubmit = true;
      
      await loginUser(formData);
    
    }
    catch(e) {
      disableSubmit = false;
      ErrorMsgEl.fireError();
    }
  }

</script>

<Form {handleOnSubmit}>
  <Title title="Log In" />
  
  <p class="text-gray-400 mb-4 text-sm text-right">New user? <a href={$url("/register")}>click here to register</a></p>

  <Input label="Email"    id="inEmail" type="email"    bind:value={formData.identifier}  />
  <Input label="Password" id="inPass"  type="password" bind:value={formData.password}   />


  <ErrorText bind:showError bind:errorMsg bind:this={ErrorMsgEl}/>
  <SubmitBtn {disableSubmit} label="Log In" />
</Form>