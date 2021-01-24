<script>
  import { url } from "@roxi/routify";
  import { user, isLoggedIn } from "@/store.js";
  import MenuItem from "./navbar/MenuItem.svelte"

  let showOptions = false;
  let showMenuMobile = false;
  
  const handleToggleOpt = e => showOptions = !showOptions;
  const handleToggleMenu = e => {
    showMenuMobile = !showMenuMobile;
    console.log({ showMenuMobile })
  }

  $: initial = $user && $user.user && $user.user.username[0] || "☻";
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" on:click={handleToggleMenu} >
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <!-- TODO: Create a Logo here -->
        <div class="flex-shrink-0 flex items-center">
          <a href={$url("/")} class="text-blue-200 font-semibold cursor-pointer">WC-ONLINE</a>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <MenuItem path="/index" label="Home" />
            <MenuItem path="/dashboard" label="Dashboard" />
            <MenuItem path="/project" label="Projects" />
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true" on:click={handleToggleOpt}>
              <span class="sr-only">Open user menu</span>
              <div class="w-8 h-8 bg-gray-500 rounded-full text-center align-middle leading-loose m-0">
                <p class="font-light font-sans text-2xl text-white m-0 leading-none">{initial}</p>
              </div>
            </button>
          </div>
          <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div class:invisible={!showOptions} class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu" on:click={()=>showOptions=false}>
            {#if $isLoggedIn}
              <a href={$url("/dashboard")}  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
              <a href={$url("/logout")}  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log out</a>
            {:else}
              <a href={$url("/login")}  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log In</a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  {#if showMenuMobile }
    <div class="sm:hidden px-2 pt-2 pb-3 space-y-1" on:click={()=>showMenuMobile=false}>
      <MenuItem label="Home" path="/index" isMobile={true} />
      <MenuItem label="Dashboard" path="/dashboard" isMobile={true} />
      <MenuItem label="Projects" path="/project" isMobile={true} />
    </div>
  {/if}
</nav>

<style>
  /* Todo Tailwind CSS apply is not working */
  /* .selected {
    @apply bg-red-700;
  } */
</style>
