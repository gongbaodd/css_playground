<script>
  let BORDER_STYLE = `
border: 10px solid hsla(0, 0%, 100%, .5);
background-clip: padding-box;`;
</script>

<style>
  .container {
    @apply flex;
    @apply items-center;
    @apply h-full;
  }

  .container > div {
    @apply m-auto;
  }

  .block {
    @apply h-16;
    @apply w-16;
    @apply m-auto;
    @apply bg-white;
  }

  textarea {
    @apply w-64;
    @apply rounded;
    @apply mt-4;
    resize: none;
  }
</style>

<div class="container">
  <div>
    <div class="playground">
      <div class="block" style={BORDER_STYLE} />
    </div>
    <textarea rows="5" bind:value={BORDER_STYLE} />
  </div>
</div>
