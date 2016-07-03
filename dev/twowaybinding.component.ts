import {Component} from 'angular2/core';
import {ContactListComponent} from './contactlist.component'


@Component({
    selector: 'twowaybinding',
    template: `
    	<contactlist [contacts] = "contacts"></contactlist>
    	<button (click)="onSelect(contact)">Set Model</button>
    	`,
    	directives : [ContactListComponent]
})

export class TwowaybindingComponent implements OnInit {

    public contacts;

    onSelect(contact) {
        console.log(this.contacts);
    }

    ngOnInit() {
        this.contacts = [{ name: 'KS', age: 27 }, { name: 'SP', age: 25 }];
    }

}