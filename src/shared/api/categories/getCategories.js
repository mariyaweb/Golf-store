import { apiRoot } from '../commercetoolsClient';

export async function getCategories() {
  const response = await apiRoot
    .categories()
    .get()
    .execute();
  console.log('category:');
  console.log(response.body.results);
  return response.body.results;
}
