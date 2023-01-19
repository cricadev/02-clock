<template>
  <div class="container">
    <Meta
      name="description"
      content="Demo of using @nuxtjs/color-mode for Nuxt, supporting dark mode and custom colors"
    />
    <NuxtPage />
  </div>
</template>

<style>
p {
  padding: 20px 0;
  margin: 0;
}
.container {
  text-align: center;
  padding: 50px;
  min-height: 100vh;
}
.note {
  transition: all 0.3s;
  display: inline-block;
  padding: 15px 15px;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
}
</style>
