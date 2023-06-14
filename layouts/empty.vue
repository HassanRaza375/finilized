<template>
  <v-app class="fancy-border" style="background: #2b3d93">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fancy-border {
  border-top: 5px solid;
  border-image: linear-gradient(
      to right,
      #fa6e50 14.28%,
      #a0d468 14.28%,
      #a0d468 28.57%,
      #c0c6c8 28.57%,
      #c0c6c8 42.85%,
      #7baab9 42.85%,
      #7baab9 57.14%,
      #e3bd58 57.14%,
      #e3bd58 71.42%,
      #4eb9e4 71.42%,
      #4eb9e4 85.71%,
      #a58de8 85.71%
    )
    7;
}
</style>
