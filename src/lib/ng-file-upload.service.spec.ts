import { TestBed } from '@angular/core/testing';

import { NgFileUploadService } from './ng-file-upload.service';

describe('NgFileUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFileUploadService = TestBed.get(NgFileUploadService);
    expect(service).toBeTruthy();
  });
});
