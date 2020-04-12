<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.info"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <h2>Descripción</h2>
        <p class="mb-20">{{ $store.state.description }}</p>
        <!-- Posts in City -->
        <posts-grid :city="[$store.state.name]" :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          Ciudades
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/ciudades/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  data() {
    return {
      allCats: []
    }
  },
  head() {
    return {
      title: `${this.$store.state.name} | ${this.$siteConfig.siteName}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'city', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.city.getAll()
  }
}
</script>
