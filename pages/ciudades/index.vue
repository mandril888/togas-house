<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="Ciudades" image="https://picsum.photos/1800/1801" />
    <main-section theme="one-column">
      <cities-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Ciudades | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
