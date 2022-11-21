import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'HelloWord',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44363/',
    redirectUri: baseUrl,
    clientId: 'HelloWord_App',
    responseType: 'code',
    scope: 'offline_access HelloWord',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44363',
      rootNamespace: 'HelloWord',
    },
  },
} as Environment;
