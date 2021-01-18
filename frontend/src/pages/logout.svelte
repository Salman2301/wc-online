<script>
  import { logOut } from "./_component/module/Auth.svelte";
  import { goto } from "@roxi/routify";

  logOut();
  $goto("/")
</script>

<h1> Logging out</h1>
