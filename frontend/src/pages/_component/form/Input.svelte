<script>
  import { onMount } from "svelte";
  import { v4 as uuidV4 } from "uuid";

  export let label = "";
  export let value = "";
  export let name = null;
  export let type = "text";
  export let required = true;
  export let id = uuidV4();

  function bindType() {
    let el = document.getElementById(id);
    if(!el) return;// page is not ready yet
    el.setAttribute("type", type);
  }

  onMount(()=>{
    bindType()
  })


</script>

<label class="text-gray-500 py-0.5 font-semibold" for={id} >{label}</label>
<input  class="w-60 px-2 py-1 mb-3 rounded border focus:outline-none  focus:border-blue-700" name={name} required={required} id={id} bind:value={value} >
