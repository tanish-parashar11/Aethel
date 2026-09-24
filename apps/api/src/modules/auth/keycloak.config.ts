export const keycloakConfig = { issuer: process.env.KEYCLOAK_URL || '', realm: process.env.KEYCLOAK_REALM || 'aneis', clientId: process.env.KEYCLOAK_CLIENT_ID || 'aneis-web' };
