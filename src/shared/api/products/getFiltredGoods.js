import { apiRoot } from 'shared/api/commercetoolsClient';

// 'variants.attributes.brand.key:"callaway"'
// categories.id:"5b321035-7479-4d60-ace1-dfbb47604f7e"
// filter: ['categories.id:"5b321035-7479-4d60-ace1-dfbb47604f7e"', 'variants.attributes.brand.key:"callaway"'],
// variants.attributes.New:"true"
// const testdata = ['variants.attributes.brand.key:"stromberg", "callaway"'];
export const getFiltredGoods = async (limitValue = 15, offsetValue = 0, filterArr = []) => {
  try {
    const response = await apiRoot
      .productProjections()
      .search().get({
        queryArgs: {
          limit: limitValue,
          offset: offsetValue,
          filter: [...filterArr],
        },
      }).execute();
    console.log(response);
    if (!response || !response.body || !response.body.results) {
      throw new Error('API вернул некорректный ответ');
    }
    return response.body.results;
  } catch (error) {
    console.error('Ошибка в getGoods:', error);
    throw error;
  }
};
