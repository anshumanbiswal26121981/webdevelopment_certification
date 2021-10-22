import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appChangeColorDirective]'
})
export class ChangeColorDirectiveDirective {

  constructor(private elRef: ElementRef) { }
  @HostListener('mouseover') onMouseOver() {
    this.changeColor('#B2D732');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }
  private changeColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }  

}
