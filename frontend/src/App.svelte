<script lang="ts">
	import TailwindCss from "./TailwindCss.svelte";
	import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
	
	// get the value from rollup - replace
	window.serverURL = "BACKEND_SERVER";

</script>

<main>
</main>

<Router {routes} />
<TailwindCss/>