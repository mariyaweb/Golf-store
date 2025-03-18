import { apiRoot } from 'shared/api/commercetoolsClient';

export const getProductById = async (productId) => {
  try {
    const product = await apiRoot.products().withId({ ID: productId }).get().execute();
    return product.body;
  } catch (error) {
    return null;
  }
};
