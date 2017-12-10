import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSortableComponent } from './simple-sortable/simple-sortable.component';
import { SortablejsModule } from 'angular-sortablejs';
import { SortableWithOptionsComponent } from './sortable-with-options/sortable-with-options.component';

@NgModule({
  imports: [
    CommonModule,
    SortablejsModule,
  ],
  declarations: [
    SimpleSortableComponent,
    SortableWithOptionsComponent,
  ]
})
export class ExamplesModule { }
