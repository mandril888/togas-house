import Post from './post'
import Category from './category'
import City from './city'
import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.category = new Category(axios)
    this.city = new City(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
