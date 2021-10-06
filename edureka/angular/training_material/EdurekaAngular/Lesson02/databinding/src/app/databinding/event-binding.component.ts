import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Click Me! </button>
  `,
  styles: []
})
export class EventBindingComponent  {
    @Output('clickable') clicked = new EventEmitter<string>(); //initialize the event
    onClicked(){
      this.clicked.emit('I raised the event!');     //raise the event
    }

}
