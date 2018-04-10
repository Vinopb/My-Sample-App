import { Component, OnInit } from '@angular/core';
import { Ingerdient } from '../shared/Ingerdient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingerdients : Ingerdient[]=[
    new Ingerdient("Apple",100),
    new Ingerdient("Orange",50)
  ]
  constructor() { }

  ngOnInit() {
  }
  AddIngerdient(event : Ingerdient){
    this.ingerdients.push(event);
  }
}
