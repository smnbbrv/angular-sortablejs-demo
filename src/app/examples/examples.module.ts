import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSortableComponent } from './simple-sortable/simple-sortable.component';
import { SortablejsModule } from 'angular-sortablejs';
import { SortableWithOptionsComponent } from './sortable-with-options/sortable-with-options.component';
import { SortableFormArrayComponent } from './sortable-form-array/sortable-form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultipleListsComponent } from './multiple-lists/multiple-lists.component';

@NgModule({
  imports: [
    CommonModule,
    SortablejsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SimpleSortableComponent,
    SortableWithOptionsComponent,
    SortableFormArrayComponent,
    MultipleListsComponent,
  ]
})
export class ExamplesModule { }
