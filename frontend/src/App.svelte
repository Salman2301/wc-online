<script>
	// import Navbar from "./component/Navbar.svelte"
	import TailwindCss from "./TailwindCss.svelte";
	import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<!-- <Navbar /> -->
<main>
</main>

<Router {routes} />

<TailwindCss/>