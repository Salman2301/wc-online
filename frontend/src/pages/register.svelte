<script>
  import { onMount } from "svelte";
  import { get  } from 'svelte/store';
  import { goto } from "@roxi/routify";
  import { isLoggedIn } from "../store.js";
  import { registerUser } from "./_component/module/Auth.svelte";
  import Title from "./_component/basic/Title.svelte";
  import Form from "./_component/form/Form.svelte";
  import Input from "./_component/form/Input.svelte";
  import ErrorText from "./_component/form/ErrorText.svelte";
  import SubmitBtn from "./_component/form/SubmitBtn.svelte";

  let formData = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    rePassword: ""
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
      
      if( formData.password !== formData.rePassword ) {
        disableSubmit = false;
        ErrorMsgEl.fireError("Password didn't match");
        return;
      }

      delete formData.rePassword;
      formData.username = formData.email;
      
      await registerUser(formData);
    
    }
    catch(e) {
      disableSubmit = false;
      ErrorMsgEl.fireError();
    }
  }

</script>

<Form {handleOnSubmit}>
  <Title title="Register" />
  
  <Input label="First Name"  id="inFName"  type="text"     bind:value={formData.fName}      />
  <Input label="Last Name"   id="inLName"  type="text"     bind:value={formData.lName}      />
  <Input label="Email"       id="inEmail"  type="email"    bind:value={formData.email}      />
  <Input label="Password"    id="inPass"   type="password" bind:value={formData.password}   />
  <Input label="Re-Password" id="inRPass"  type="password" bind:value={formData.rePassword} />

  <ErrorText bind:showError bind:errorMsg bind:this={ErrorMsgEl}/>
  <SubmitBtn {disableSubmit} label="Register" />
</Form>