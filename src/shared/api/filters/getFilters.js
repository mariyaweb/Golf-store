import { apiRoot } from '../commercetoolsClient';

export async function getFilters() {
  const response = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        facet: [
          'variants.attributes.colors.key as colors',
          'variants.attributes.brand.key as brand',
          'variants.attributes.New as new',
          'variants.attributes.shoes-sizes.key as shoes-sizes',
          'variants.attributes.clothing-sizes.key as clothing-sizes',
          'variants.attributes.gender.key as gender',
          'variants.attributes.hand.key as hand',
        ],
        limit: 0,
      },
    })
    .execute();
  console.log(response.body.facets);
  return response.body.facets;
}
