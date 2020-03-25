<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
</script>

<style>

</style>

<Tailwindcss />

<main>

  <div class="container">
    <div class="notification">
      This container is
      <strong>centered</strong>
      on desktop.
    </div>
  </div>
  <slot />
</main>
