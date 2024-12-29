import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

 msg="default";

  constructor()
  {
    console.log("parent constructor");
  }

 ngOnInit(): void {
  console.log("parent init calling");
}

}
