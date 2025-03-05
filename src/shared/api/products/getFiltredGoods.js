import { apiRoot } from 'shared/api/commercetoolsClient';

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
    if (!response || !response.body || !response.body.results) {
      throw new Error('API вернул некорректный ответ');
    }
    return response.body.results;
  } catch (error) {
    console.error('Ошибка в getGoods:', error);
    throw error;
  }
};
