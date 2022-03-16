import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-a-card-button',
  templateUrl: './add-a-card-button.component.html',
  styleUrls: ['./add-a-card-button.component.css']
})
export class AddACardButtonComponent implements OnInit {
  @Output() createNewCard = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewCard(){
    const cardData = window.prompt('Enter data in the following format: title; description');
    const cardDataArr = cardData!.split(';')
     
    this.createNewCard.emit({ 
      title: cardDataArr[0], 
      details: cardDataArr[1] 
    })
  }
}
