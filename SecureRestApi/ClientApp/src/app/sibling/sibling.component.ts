import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-sibling',
    template: `{{message}}
    <button (click)="updateMessage()">New Message</button>
`,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
    message: string;
  constructor(private _data: DataService) { }

    ngOnInit() {
        this._data.currentMessage.subscribe(message => this.message = message);
    }

    updateMessage() {
        this._data.changeMessage('Hello From Sibling');
    }

}
