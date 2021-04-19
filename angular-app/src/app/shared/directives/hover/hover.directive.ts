import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover]',
})
export class HoverDirective {
  @Input() hover: string;

  @Input() hoverDefaultColor: string = 'blue';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.hover || this.hoverDefaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
