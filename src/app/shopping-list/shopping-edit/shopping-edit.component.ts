import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingerdient } from '../../shared/Ingerdient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameRef : ElementRef
  @ViewChild("amountInput") amountRef : ElementRef
  @Output() IngerdientAdded = new EventEmitter<Ingerdient>();
 
  constructor() { }

  ngOnInit() {
  }
  AddIngerdient(){
    const  name = this.nameRef.nativeElement.value;
    const  Amount = this.amountRef.nativeElement.value;
    this.IngerdientAdded.emit(new Ingerdient(name,Amount));  
  }
}
