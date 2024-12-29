import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CustomdirectoryDirective } from './customdirectory.directive';
import { CustomrederelementDirective } from './customrederelement.directive';
import { CustomeventdirectoryDirective } from './customeventdirectory.directive';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SqrPipe } from './sqr.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomdirectoryDirective,
    CustomrederelementDirective,
    CustomeventdirectoryDirective,
    ChildComponent,
    ParentComponent,
    SqrPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
