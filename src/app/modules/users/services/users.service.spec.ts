import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';


describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
