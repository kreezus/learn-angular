import { ElementRef } from '@angular/core';
import { HoverDirective } from './hover.directive';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    const directive = new HoverDirective(new ElementRef('<div></div>'));
    expect(directive).toBeTruthy();
  });
});
