import { Item } from './types'
import Fuse from 'fuse.js'

const DEFAULT_FUSE_OPTION = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['label', 'searchable'],
}

export const search = (
  filter: string = '',
  data: Item[] = [],
  options?: Fuse.FuseOptions<Item>,
) => {
  const fuseOptions = { ...DEFAULT_FUSE_OPTION, ...options }
  const fuse = new Fuse<Item>(data, fuseOptions)

  if (data.length === 0) {
    return []
  }

  if (filter && filter !== '') {
    const result = fuse.search(filter)
    return result
  } else {
    return data
  }
}
