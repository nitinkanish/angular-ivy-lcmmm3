import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: {id: number, title: string};
  internalState = true;
  @Input() stateFromParent: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleInternalState() {
    this.internalState  = !this.internalState;
    this.stateFromParent = !this.stateFromParent;
  }

}