<script>
  import { goto } from "@roxi/routify";
  export let name = "";
  export let src = "";
  export let link = ""

</script>

<div class="card boder border-gray-600 border rounded shadow-xl m-2" >
  <h1 class="text-center text-blue-600 font-semibold font-medium my-3">{name}</h1>
  <iframe title={name} src={src} height="300px" class="w-full" ></iframe>
  <button class="w-full py-2 bg-blue-600 text-white font-semibold m-0 rounded-none" target="_blank" on:click={()=>$goto(link)}>Edit</button>
</div>