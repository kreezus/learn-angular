import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover/hover.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HoverDirective, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [HoverDirective, PageNotFoundComponent],
})
export class SharedModule {}
