<template>
  <div class="flex flex-col justify-center px-8">
    <AppNavBar
      :links="[
        { text: 'Home', props: { to: '/' } },
        { text: 'Lobby', props: { to: '/lobby' } },
        { text: 'Survival', props: { to: '/survival' } },
      ]"
    />
  </div>
  <div class="flex flex-col justify-center px-8 py-4">
    <main
      id="main"
      class="flex flex-col justify-center max-w-2xl mx-auto bg-standard"
    >
      <div class="flex flex-col justify-center">
        <ContentDoc />
        <ContentRenderer :value="data" />
      </div>
    </main>
  </div>
  <AppFooter />
</template>

<script setup>
const { data } = await useAsyncData("page-data", () =>
  queryContent().where({ _path: "/_call-to-action" }).findOne(),
);

console.log(data);
</script>
