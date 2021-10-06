import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}
  `,
  styles: [],
  //inputs: ['result']
})
export class PropertyBindingComponent  {
  @Input() result: number=0;
 
}
