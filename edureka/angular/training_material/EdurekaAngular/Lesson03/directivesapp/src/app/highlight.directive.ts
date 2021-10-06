import { Directive,ElementRef,Renderer2,OnInit,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor='white';
  @Input() highlightColor='green';
  private backgroundColor: string;
  @HostListener('mouseenter') mouseover(){
      this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor=this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
   constructor(private element: ElementRef, private renderer: Renderer2) {   }
   //          hosting element (Div), Render the style in the view

  ngOnInit(){
   // this.renderer.setStyle(this.element.nativeElement,'background-color','green');
    this.backgroundColor=this.defaultColor;
  }

}
