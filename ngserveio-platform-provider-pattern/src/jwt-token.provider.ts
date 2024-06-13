import { SessionStorageJwtService } from './session-storage-jwt.service';
import { CookieJwtService } from './cookie-jwt.service';
import { platformProviderFactory } from './platform-provider.factory';
import { IJwtClaimsService } from './jwt-service.interface';

export const jwtTokenProvider = () => {
  return platformProviderFactory<IJwtClaimsService>(
    SessionStorageJwtService,
    CookieJwtService
  );
};
