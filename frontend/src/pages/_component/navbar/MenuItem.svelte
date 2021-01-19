<script>
  import { isActive, url } from "@roxi/routify";

  export let path = "/index";
  export let label = "Home";
  export let isMobile = false;
</script>

<!-- class:bg-gray-900={!$isActive(path)} -->

<a href={$url(path)} 
  class:bg-gray-900={$isActive(path)}
  class:text-white={$isActive(path)}
  class:text-gray-300={!$isActive(path)}
  class:text-sm={!isMobile}
  class:block={isMobile}
  class=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium" >{label}</a>