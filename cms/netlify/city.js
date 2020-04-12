import { getMixins } from './mixins'

class City {
  constructor(axios) {
    this.slug = 'city'
    this.slugPlural = 'cities'
    this.pretty = 'City'
    this.plural = 'Cities'
    this.axios = axios
  }
}

// Mixins
Object.assign(City.prototype, getMixins)
export default City
