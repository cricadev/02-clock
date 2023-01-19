<template>
  <div class="container">
    <Meta
      name="description"
      content="Demo of using @nuxtjs/color-mode for Nuxt, supporting dark mode and custom colors"
    />
    <NuxtPage />
    <p class="flex flex-col items-center justify-center gap-2 rounded-lg special-thanks">
      <div class="inline-flex items-center gap-2">
        <span>Made with love by <strong>CricaDev</strong>
</span>
        <img src="./public/icon.png" alt="" class="w-8 h-8" />
      </div>
      <p>     This is the second project from <strong>Nuxt.js  - 30 day challenge</strong></p>
 
    </p>
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
