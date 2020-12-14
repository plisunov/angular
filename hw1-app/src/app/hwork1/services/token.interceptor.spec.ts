import {TestBed} from '@angular/core/testing';

import {TokenInterceptor} from './token.interceptor';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TokenInterceptor', () => {
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenInterceptor
      ],
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
