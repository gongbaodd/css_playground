<script>
  const BORDER_STYLE = `
border: 10px solid hsla(0, 0%, 100%, .5);
background-clip: padding-box;`;
</script>

<style>
  .container {
    @apply flex;
    @apply items-center;
    @apply h-full;
  }

  .block {
    @apply h-16;
    @apply w-16;
    @apply bg-white;
    @apply m-auto;
  }
</style>

<div class="container">
  <div class="block" style={BORDER_STYLE} />
</div>
