import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {
  @Input() cardInfo: Card | undefined;
  @Output() moveCard = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }

  moveBack(){
    this.moveCard.emit({cardInfo: this.cardInfo, forward: false})
  }

  moveFoward(){
    this.moveCard.emit({cardInfo: this.cardInfo, forward: true})
  }

}
