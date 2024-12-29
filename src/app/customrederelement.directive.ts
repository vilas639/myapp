import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomrederelement]'
})
export class CustomrederelementDirective implements OnInit {

  constructor(private e:ElementRef,private render:Renderer2) {

    console.log(render);
  }
  ngOnInit(): void {

    this.render.setStyle(this.e.nativeElement,"backgroundColor","pink");
    this.render.setStyle(this.e.nativeElement,"font-size","26px");
    this.render.addClass(this.e.nativeElement,"myClass");
  }

}
