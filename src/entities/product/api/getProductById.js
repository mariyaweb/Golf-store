import { apiRoot } from 'shared/api/commercetoolsClient';

export const getProductById = async (productId) => {
  try {
    const product = await apiRoot.products().withId({ ID: productId }).get().execute();
    console.log('Product:', product.body);
    return product.body;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};
