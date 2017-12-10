import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SimpleSortableComponent } from './examples/simple-sortable/simple-sortable.component';
import { RouterModule } from '@angular/router';
import { SortablejsModule } from 'angular-sortablejs';
import { ExamplesModule } from './examples/examples.module';
import { SortableWithOptionsComponent } from './examples/sortable-with-options/sortable-with-options.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'simple' },
      {
        path: 'simple',
        component: SimpleSortableComponent,
      },
      {
        path: 'custom-options',
        component: SortableWithOptionsComponent,
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
