<script lang="ts">
  export let title: string;
  export let ogTitle: string | null = null;
  export let description: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={ogTitle ?? title} />
  <meta property="og:description" content={description} />
  <meta name="twitter:card" content="summary" />
  <meta
    content="Jax Dunfee · Security Researcher based in the United States"
    property="twitter:title"
  />
  <meta
    content="Security Researcher focused on Web and Binary Exploitation."
    property="twitter:description"
  />
</svelte:head>
