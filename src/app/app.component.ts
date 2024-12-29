import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'myapp';

  home="welcome vilas";
  firstname="vilas";
  lastname="jadhav";

  lastnamecolor="Red";
  lastnamecolorstyle="c1";
  lastnamecolorstyle1="c2";
  age=32;

   uname = 'John';

   numer1=10;

   data: any;
   constructor(private render: Renderer2,private apiService: ApiService)
   {
      console.log("app constructor");
   }
  ngOnInit(): void {
   console.log("app componet init calling");
   this.apiService.getData('test1').subscribe(
    (response) => {
      this.data = response;
      console.log('API response:', this.data);
    },
    (error) => {
      console.error('Error:', error);
    }
  );
  }
   method1():void{
    alert("wooww welcome buddy!");
   }

   method2():void {
      this.lastnamecolorstyle;
   }

   method3():void{
    this.lastnamecolor="Green";
    this.render.setStyle(this.lastnamecolor,"color","red");
   }
}
