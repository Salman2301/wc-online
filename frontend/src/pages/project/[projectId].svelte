<script context="module" >
  //
</script>

<script lang="typescript">
  import { params } from '@roxi/routify'
  import Title from '../_component/basic/Title.svelte';
  import { AceEditor } from "svelte-ace";

  import "brace/mode/html";
  import "brace/theme/monokai.js";
  import Input from '../_component/form/Input.svelte';

  let text:string = `
  
  
  
  
  `;

 
</script>

<Title title={"CurrentID 1: " + $params.projectId }/>


<div class="w-1/2">
  <div class="mx-10">
    <Input value="" label="Tag Name"  placeholder="Tag-Name"/>
  </div>
  <AceEditor
    width='100%'
    height='100vh'
    lang="html"
    theme="monokai"
    bind:value={text} />
</div>

<div class="w-1/2">
  <iframe></iframe>
</div>

