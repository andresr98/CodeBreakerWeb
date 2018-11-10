import { TestBed, inject } from '@angular/core/testing';

import { CodeBreakerService } from './code-breaker.service';

describe('CodeBreakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeBreakerService]
    });
  });

  it('should be created', inject([CodeBreakerService], (service: CodeBreakerService) => {
    expect(service).toBeTruthy();
  }));
});
