<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { featuredProjects } from "$lib/projects";
</script>

<Seo
  title="Jax Dunfee"
  description="Jax Dunfee · Security Researcher based in the United States"
/>

<p
  class="layout-md text-xl leading-tight font-light mb-6 text-[#DAA520]"
  id="intro"
>
  <span class="g">enjoys </span> cycling <span class="g">&</span> rock climbing
</p>

<div class="layout-md text-lg space-y-5">
  <p>
    I'm Jax, a full-time <span class="underline-red">Vulnerability Researcher</span> with a passion for 
    <span class="underline-orange">Automatic Exploit Generation</span>.
  </p>
  <p>
    In the CTF space, I specialize in the <span class="underline-green">pwn</span> and
    <span class="underline-green">reverse engineering</span> categories.
  </p>
  <p>
    Based in the <span class="underline-orange">Washington D.C.</span> area, I balance 
    technical work with rock climbing, reading, and my love for coffee.
  </p>

  <div class="leading-snug space-y-4">
    <p>Selected projects:</p>
    {#each featuredProjects as project}
      <a class="project-pair" href={project.href} target="_blank">
        <div class="text-[#BBBBBB] font-medium hover:text-[#DAA520]">
          {project.name}
          <ArrowUpRight size={18} class="inline text-[#DAA520]" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-600 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #intro {
      @apply -mt-10;
    }
  }
</style>
