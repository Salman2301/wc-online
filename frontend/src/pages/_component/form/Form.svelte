<script>
  export let handleOnSubmit;
</script>

<div class="bg-gray-50 mt-5 container flex items-center justify-center mx-auto  max-w-md  border border-blue-500 rounded">
  <form class="content-center justify-center p-4"  on:submit|preventDefault={handleOnSubmit}>
    <slot></slot>
  </form>
</div>