import {Component} from 'angular2/core';

@Component({
	selector : 'contactlist',
	template: `
    <div *ngFor="#contact of contacts" >
			<div >My age is {{contact.age}}</div>
    		<input [(ngModel)]="contact.age" />
    		
    	</div>
    `,
    inputs : ["contacts"]
	
})
	
export class ContactListComponent{
	public contacts = [];
}