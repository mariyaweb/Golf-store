import { apiRoot } from 'shared/api/commercetoolsClient';

export const getGoods = async (limitValue = 30, offsetValue = 0) => {
  try {
    const response = await apiRoot.products().get({
      queryArgs: { limit: limitValue, offset: offsetValue },
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
