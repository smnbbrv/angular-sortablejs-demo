import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-sortable-with-options',
  templateUrl: './sortable-with-options.component.html',
  styleUrls: ['./sortable-with-options.component.css']
})
export class SortableWithOptionsComponent {

  items = [
    { cssClass: 'draggable', text: '1' },
    { cssClass: 'draggable', text: '2'  },
    { cssClass: 'not-draggable', text: '3'  },
    { cssClass: 'draggable', text: '4'  },
    { cssClass: 'draggable', text: '5'  }
  ];

  options: SortablejsOptions = {
    draggable: '.draggable'
  };

}
