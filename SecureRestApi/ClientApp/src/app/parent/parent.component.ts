import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-parent',
    template: `{{message}}
<button (click)=updateMessage()>New Message from parent</button>
`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    message: string;
  constructor(private _data: DataService) { }

    ngOnInit() {
        this._data.currentMessage.subscribe(m => this.message = m);
  }

    updateMessage() {
        this._data.changeMessage('Hello from Parent');
    }

}
