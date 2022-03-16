import { Component } from '@angular/core';

export type Card = {
  title:string,
  details:string,
  currentColumn:number,
  id:number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upstart';
  counter = 0;
  columnState: {[columnNum: number]: Card[]} = {
    1:[],
    2:[],
    3:[],
    4:[],
  }

  addNewCard(event: any){
    const newCard: Card = {
      title: event.title,
      details: event.details,
      currentColumn: event.columnId,
      id: ++this.counter,
    } 
    this.columnState[newCard.currentColumn].push(newCard)
  }

  moveCard(event:any){
    this.columnState[event.cardInfo.currentColumn] = 
      this.columnState[event.cardInfo.currentColumn].filter(card => card.id !== event.cardInfo.id)
    
    const newColumn  = event.forward ? event.cardInfo.currentColumn+1 : event.cardInfo.currentColumn-1;
    this.columnState[newColumn].push(event.cardInfo)
    
    

    // if col = 2,3 -> add or substract 
    // if col = 1 -> forward normal, back = 4    
    // if col = 4 -> forward = 1, back normal 
  }
}
