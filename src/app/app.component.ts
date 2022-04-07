import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  someValue = true;

  toggleSomeValue() {
    this.someValue  = !this.someValue;
  }

  cardInfo = [
    {id: 1, title: 'Title 1'},
    {id: 2, title: 'Title 2'},
    {id: 3, title: 'Title 3'},
    {id: 4, title: 'Title 4'}
  ]
  
}
