import api from '../data/api.json'
import { normalize, schema } from 'normalizr'

// --- documentacion: https://github.com/paularmstrong/normalizr
const media      = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, padre, key) => ({...value, category: parent.id})
})

const category   = new schema.Entity( 'categories', {
  playlist: new schema.Array(media)
}, )

const categories = { categories: new schema.Array(category) }

const normalizedData = normalize(api, categories)

export default normalizedData
