import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,OnInit{

  @Input() title:any;

    msg1:any;

  constructor()
  {
    console.log("childComplonet constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("childComplonet ngOnChanges");
    this.msg1=this.title;
  }

  ngOnInit()
  {
console.log("child is init")

  }

}
