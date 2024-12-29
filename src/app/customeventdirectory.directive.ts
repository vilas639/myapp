import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomeventdirectory]'
})
export class CustomeventdirectoryDirective implements OnInit{

  constructor(private e:ElementRef,private render:Renderer2) {
    console.log(e);
  }
  ngOnInit(): void {
    this.render.setStyle(this.e.nativeElement,"backgroundColor","green");
  }

  @HostListener('mouseover') m1(event:Event){

    this.render.setStyle(this.e.nativeElement,"backgroundColor","blue");
  }



}
