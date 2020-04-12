import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'
import generateCityApi from '../build/generate-city-api'

export default () => {
  generatePostApi()
  generateCategoryApi()
  generateCityApi()
}
