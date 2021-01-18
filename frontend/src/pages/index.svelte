<script>
  import { url } from '@roxi/routify';
  import { isLoggedIn } from "@/store.js";

</script>

<div>
  {#if $isLoggedIn}
    <h1> Goto <a href={$url("/dashboard")}>Dashboard</a></h1>
  {:else}
    <h1> Click here to 
        <span class="text-red-500" >
        <a href={$url('./register')}>Register</a>
      </span>
    </h1>
  {/if}
</div>

<h1>Home</h1>