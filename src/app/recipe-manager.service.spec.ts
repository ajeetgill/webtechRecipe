import { TestBed, inject } from '@angular/core/testing';

import { RecipeManagerService } from './recipe-manager.service';

describe('RecipeManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeManagerService]
    });
  });

  it('should be created', inject([RecipeManagerService], (service: RecipeManagerService) => {
    expect(service).toBeTruthy();
  }));
});
