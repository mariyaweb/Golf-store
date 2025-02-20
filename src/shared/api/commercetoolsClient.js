import { createClient, createAuthForClientCredentialsFlow, createHttpClient } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

const projectKey = process.env.REACT_APP_CTP_PROJECT_KEY;

const commercetoolsClient = createClient({
  middlewares: [
    createAuthForClientCredentialsFlow({
      host: process.env.REACT_APP_CTP_AUTH_URL,
      projectKey,
      credentials: {
        clientId: process.env.REACT_APP_CTP_CLIENT_ID,
        clientSecret: process.env.REACT_APP_CTP_CLIENT_SECRET,
      },
      fetch,
    }),
    createHttpClient({
      host: process.env.REACT_APP_CTP_API_URL,
      fetch,
    }),
  ],
});

// Создаём API-интерфейс с удобными методами
export const apiRoot = createApiBuilderFromCtpClient(commercetoolsClient)
  .withProjectKey({ projectKey });

export default commercetoolsClient;
