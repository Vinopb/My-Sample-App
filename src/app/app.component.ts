import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Tabname : string = "Recipe";
  OnHeaderClicked(name:string){
    console.log(`clicked : ${name}`)
    this.Tabname = name;
  }
}
