import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateCityApi = () => {
  const contentDir = `${rootDir}/content/cities`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/cities.json`
  const metaFile = `${apiDir}/cities-meta.json`
  const pages = siteConfig.cities.perPage
  const doneMessage = `{totalNumber} cities generated in cities API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/cities`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateCityApi
