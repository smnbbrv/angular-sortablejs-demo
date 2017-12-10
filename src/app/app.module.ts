import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SimpleSortableComponent } from './examples/simple-sortable/simple-sortable.component';
import { RouterModule } from '@angular/router';
import { SortablejsModule } from 'angular-sortablejs';
import { ExamplesModule } from './examples/examples.module';
import { SortableWithOptionsComponent } from './examples/sortable-with-options/sortable-with-options.component';
import { SortableFormArrayComponent } from './examples/sortable-form-array/sortable-form-array.component';
import { MultipleListsComponent } from './examples/multiple-lists/multiple-lists.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'sortable-array' },
      {
        path: 'sortable-array',
        component: SimpleSortableComponent,
      },
      {
        path: 'sortable-form-array',
        component: SortableFormArrayComponent,
      },
      {
        path: 'custom-options',
        component: SortableWithOptionsComponent,
      },
      {
        path: 'multiple-lists',
        component: MultipleListsComponent,
      },
    ]),

    // global settings
    SortablejsModule.forRoot({
      animation: 200,
    }),

    ExamplesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
