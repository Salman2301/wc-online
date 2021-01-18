<script>
  export let showError = false;
  export let errorMsg = "";

  
  let errorInterval;
  export function fireError(error="Something went wrong!") {
    errorMsg = error;
    showError = true;

    clearInterval(errorInterval);
    errorInterval = setTimeout(()=>{
      showError = false;
    }, 12 * 1000 );
  }


</script>

  <p class="font text-red-600 font-semibold" class:invisible={!showError} >{errorMsg}</p>