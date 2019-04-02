import { NgModule } from '@angular/core';
import { TptPaginatorComponent } from './tpt-paginator.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TptPaginatorComponent],
  imports: [
    CommonModule
  ],
  exports: [TptPaginatorComponent]
})
export class TptPaginatorModule { }
