<script>
import Title from "../_component/basic/Title.svelte";
import ProjectCard from "../_component/cards/ProjectCard.svelte";

</script>

<Title title="My Projects"/>

<div class="grid grid-cols-1 mx-20 sm:mx-0 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:px-10 md:px-5 px-2">
  <ProjectCard name="My Project" src="http://localhost:5000" 
    link="/project/id" />
  <ProjectCard name="My Project" src="http://localhost:5000" 
    link="/project/id" />
  <ProjectCard name="My Project" src="http://localhost:5000" 
    link="/project/id" />
  <ProjectCard name="My Project" src="http://localhost:5000" 
    link="/project/id" />
</div>

