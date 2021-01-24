<script context="module" >
  //
</script>

<script lang="typescript">
  import { params } from '@roxi/routify'
  import Title from '../_component/basic/Title.svelte';
  import { AceEditor } from "svelte-ace";
  import { codeDefault } from "../_component/module/Default.svelte";

  import "brace/mode/html";
  import "brace/theme/monokai.js";
  import Input from '../_component/form/Input.svelte';

  let text:string = codeDefault();

 
</script>


<Title title={"CurrentID 1: " + $params.projectId }/>

<div class="mx-10">
  <Input value="" label="Tag Name"  placeholder="Tag-Name"/>
</div>

<div class="min-h-screen flex">
  <div class="w-1/2">
    <div class="tabs text-white">
      <div class="tab border border-white inline-flex pl-3 items-center h-8 w-32">
        <div class="title w-10/12 select-none">App.svelte</div>
        <div class="text-gray-400 text-center w-2/12 bg-gray-800 cursor-pointer leading-none">x</div>
      </div>
    </div>
    <AceEditor
      width='100%'
      lang="html"
      theme="monokai"
      bind:value={text} />
  </div>

  <div class="w-1/2 border">
    <iframe></iframe>
  </div>
</div>
