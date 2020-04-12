<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.city"
    :theme="$siteConfig.cities.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <category-card
        :title="item.name"
        :link="`/ciudades/${item.slug}`"
        :image="item.image"
        :description="item.description"
      />
    </template>
  </resource-grid>
</template>

<script>
import CategoryCard from '~/components/cards/CategoryCard'
export default {
  name: 'CitiesGrid',
  components: { CategoryCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    exclude: { type: String, default: '' }
  }
}
</script>
