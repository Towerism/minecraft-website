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
        <AppPartial partial="/_call-to-action" />
      </div>
    </main>
  </div>
  <AppFooter />
</template>
