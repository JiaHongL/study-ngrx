import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[MyAutofocus]'
})
export class MyAutofocus {
  constructor(private elementRef: ElementRef) { };

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }
  
}