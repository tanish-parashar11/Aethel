import { Injectable } from '@nestjs/common';
import { keycloakConfig } from './keycloak.config';
@Injectable()
export class KeycloakService { issuer() { return `${keycloakConfig.issuer}/realms/${keycloakConfig.realm}`; } metadataUrl() { return `${this.issuer()}/.well-known/openid-configuration`; } }
