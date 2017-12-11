import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrossComponentsMultipleListsComponent } from './cross-components-multiple-lists/cross-components-multiple-lists.component';
import { ChildComponentComponent } from './cross-components-multiple-lists/child-component/child-component.component';
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
  imports: [
    CommonModule,
    SortablejsModule,
  ],
  declarations: [CrossComponentsMultipleListsComponent, ChildComponentComponent]
})
export class TestCasesModule { }
