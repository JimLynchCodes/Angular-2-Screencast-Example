/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DataHolderService } from './data-holder.service';

describe('DataHolder Service', () => {
  beforeEachProviders(() => [DataHolderService]);

  it('should ...',
      inject([DataHolderService], (service: DataHolderService) => {
    expect(service).toBeTruthy();
  }));
});
