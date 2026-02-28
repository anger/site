<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { ArrowUpRight, Link } from "lucide-svelte";
  import { ctfEvents } from "$lib/ctfs";
</script>

<Seo
  title="Jax Dunfee"
  description="Jax Dunfee · Cyber Security Engineer & Security Researcher based in the United States"
/>

<p
  class="layout-md text-xl leading-tight font-light mb-4 text-[#DAA520]"
  id="intro"
>
  <span class="g">I specialize in </span> pwn
  <span class="g"> and </span> reverse engineering
  <span class="g"> challenges</span>
</p>

<div class="layout-md text-lg mb-6">
  <p class="leading-relaxed text-neutral-300">
    I've been creating CTF challenges for a while now, primarily focusing on <span
      class="underline-yellow">web</span
    >
    and <span class="underline-yellow">pwn</span> categories, though I occasionally
    develop challenges in other areas as well.
  </p>
</div>

<div class="leading-snug space-y-6 layout-md">
  {#each ctfEvents as ctf}
    <div class="p-4 rounded-lg transition-shadow duration-200">
      <h2 class="text-2xl text-[#DAA520] mb-2 font-medium">{ctf.name}</h2>
      <hr class="border-[#BBBBBB] mb-3" />
        <div class="space-y-3">
          {#if ctf.desc}
            <p class="text-neutral-300 leading-relaxed">{ctf.desc}</p>
          {/if}
        {#each ctf.challenges as challenge}
          <div class="project-pair">
            <a href={challenge.href} target="_blank">
              <div class="text-[#BBBBBB] font-medium hover:text-[#DAA520] transition-colors duration-200">
                {challenge.name}
                <span class="text-[#DAA520] ml-1">({challenge.category})</span>
                <ArrowUpRight size={18} class="inline text-[#DAA520] ml-1" />
              </div>
            </a>
            <p class="text-[#BBBBBB] leading-relaxed">
              {challenge.desc}
              {#if challenge.writeup}
                <span class="text-neutral-500"> - </span>
                <a
                  href={challenge.writeup}
                  target="_blank"
                  class="cursor-pointer hover:text-[#DAA520] transition-colors duration-200 text-sm"
                  >Writeup <Link size={14} class="inline ml-1" /></a
                >
              {/if}
            </p>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 transition-colors hover:bg-neutral-800/20 rounded-md;
  }

  aside {
    @apply text-sm text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #intro {
      @apply -mt-10;
    }
  }
</style>
