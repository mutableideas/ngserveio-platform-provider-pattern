import { Injectable, inject } from '@angular/core';
import { Nullable } from '@ngserveio/utilities';
import { parseClaims } from './token-claims.helper';
import { IJwtClaimsService } from './jwt-service.interface';
import { REQUEST, RESPONSE } from './request.token';
import { JWT_COOKIE_NAME } from './consts';

@Injectable({
  providedIn: 'root',
})
export class CookieJwtService implements IJwtClaimsService {
  protected readonly request = inject(REQUEST, {
    optional: true,
  });

  protected readonly response = inject(RESPONSE, {
    optional: true
  });

  getClaims<T extends object>(): Nullable<T> {
    const token = this.request?.cookies[JWT_COOKIE_NAME];
    return parseClaims<T>(token);
  }

  setToken(token: string): void {
    this.response?.cookie(JWT_COOKIE_NAME, token);
  }
}
