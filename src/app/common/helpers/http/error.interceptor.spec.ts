import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorHttpInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    providers: [
      ErrorHttpInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHttpInterceptor = TestBed.inject(ErrorHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
