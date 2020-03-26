<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Menu from "../components/Menu.svelte";
</script>

<style>
  .content {
    @apply h-64;
  }
</style>

<Tailwindcss />

<main>
  <section class="content">
    <slot />
  </section>
  <Menu />
</main>
