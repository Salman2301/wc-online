<script>
  export let disableSubmit = true;
  export let label = "Submit";
</script>

<button class="border-2 bg-blue-700 border-blue-700 text-white rounded-md block my-5 mx-auto w-full px-4 py-1 hover:bg-white hover:text-blue-700 disabled:bg-gray-400" type="submit" id="btnSubmit" disabled={disableSubmit} >{label}</button>
