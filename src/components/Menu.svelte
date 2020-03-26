<script>
  const Menu = [
    {
      title: "home",
      path: ".",
    },
    {
      title: "translucent-borders",
      path: "translucent-borders",
    },
  ];
</script>

<style>
  .container {
    @apply flex;
    @apply items-center;
    @apply h-screen;
  }
  .menu {
    @apply w-64;
    @apply m-auto;
  }

  .menu > ul > li {
    @apply p-2;
    @apply rounded;
    @apply bg-white;
    @apply mt-2;
    @apply text-gray-500;
    @apply flex;
    @apply shadow-none;

    @apply transition-shadow;
    @apply duration-200;
    @apply ease-in-out;
  }

  .menu > ul > li:hover {
    @apply shadow-xl;
    @apply text-gray-700;
  }

  .menu > ul > li > a {
    @apply flex-1;
  }
</style>

<section class="container">
  <div class="menu">
    <ul>
      {#each Menu as item}
        <li>
          <a href={item.path} rel="prefetch">{item.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</section>
