
<template>
  <div id="default">
    <TheHeader />
    <main class="mx-auto" >
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
</script>

<style>
main {
  min-height: calc(100vh - 100px);
  width: 900px;
  padding: 80px 20px 20px;
  background-color: white;
}

#default {
  background-color: lightgray;
}

#footer {
  height: 100px;
}
</style>
