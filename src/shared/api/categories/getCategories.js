import { apiRoot } from '../commercetoolsClient';

export async function getCategories() {
  const response = await apiRoot
    .categories()
    .get()
    .execute();
  return response.body.results;
}
