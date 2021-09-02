import { Item } from './types'
import Fuse from 'fuse.js'

const DEFAULT_FUSE_OPTION = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['label'],
}

export const search = (
  filter: string = '',
  data: Item[] = [],
  options: Fuse.FuseOptions<any> = DEFAULT_FUSE_OPTION,
) => {
  const fuse = new Fuse<Item>(data, options)

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
