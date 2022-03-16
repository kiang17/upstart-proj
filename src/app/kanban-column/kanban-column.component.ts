import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.css']
})
export class KanbanColumnComponent implements OnInit {
  @Input() columnId: number = 0;
  @Input() cards: Card[] = [];
  @Output() createNewCard = new EventEmitter<{}>();
  @Output() moveCard = new EventEmitter<{}>();


  constructor() { }

  ngOnInit(): void {
  }

  passNewCardDataToParent(event: any) {
    this.createNewCard.emit({
      title: event.title,
      details:event.details,
      columnId: this.columnId
    })
  }

  moveCardFromColumn(event:any){
    this.moveCard.emit({event})
  }
}
