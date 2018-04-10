import { Component,EventEmitter,Output} from'@angular/core'

@Component({
  selector :'<app-header>',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})

export class HeaderComponent
{
  
  @Output() HeaderClicked = new EventEmitter<string>();


  OnSelectionMenu(menuName : string){
    this.HeaderClicked.emit(menuName);
  }


  header = "Header";
}