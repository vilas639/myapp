import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomdirectory]'
})
export class CustomdirectoryDirective implements OnInit {

  constructor(private e:ElementRef) {

    console.log(e);
  }
  ngOnInit(): void {
    this.e.nativeElement.style.backgroundColor="red";
    this.e.nativeElement.style.color='blue';
  }



}
