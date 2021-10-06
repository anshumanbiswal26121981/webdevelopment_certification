import { Component, OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked,
         AfterViewInit,AfterViewChecked,OnDestroy,Input } from '@angular/core';
@Component({
  selector: 'fa-lifecycle',
  template: `<ng-content></ng-content>
             {{bindable}}
             <br/>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges,OnInit,DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,
   AfterViewChecked,OnDestroy {
  @Input() bindable = 1000;
  constructor() { }
  ngOnInit()              { this.log("ngOnInit");               }
  ngOnChanges()           { this.log("ngOnChanges");            }
  ngDoCheck()             { this.log("ngDoCheck");              }
  ngAfterContentInit()    { this.log("ngAfterContentInit");     }
  ngAfterContentChecked() { this.log("ngAfterContentChecked");  }
  ngAfterViewInit()       { this.log("ngAfterViewInit");        }
  ngAfterViewChecked()    { this.log("ngAfterViewChecked");     }
  ngOnDestroy()           { this.log("ngOnDestroy");            }
  private log(hook: string){
    console.log(hook);
  }
} 
