<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contáctanos"
      subtitle="¿Tienes alguna duda?"
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                ¡Hola!
              </p>
              <p class="subtitle">
                ¿Qué podemos hacer por tí?
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-person.jpg').src"
                  :srcset="
                    require('~/assets/uploads/contact-person.jpg').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  This form doesn't actually work but would be easy enough to
                  slap an action on to have it post wherever you'd like. Or put
                  the netlify attribute on it and have netlify handle all your
                  form submissions...
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Últimos posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contacto | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
