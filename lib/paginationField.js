import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything

    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // read the number of items on page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // if there are items
      // and there arent enough to satisfy how many requested
      // and we are on the last page
      // then just send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // we dont have any items, we must go to network
        return false;
      }
      if (items.length) {
        console.log(`THERE ARE ${items.length} items in the cache`);
        return items;
      }

      return false;
    },

    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this runs when apollo returns from network
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      // returnng merged items from cache
      return merged;
    },
  };
}
