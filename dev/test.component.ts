import {Component} from 'angular2/core';
import {TwowaybindingComponent} from './twowaybinding.component';

@Component({
    selector: 'test1',
    //templateUrl: 'templates/test.tpl.html'
    template: `<h1 (click)="onSelect()" [class.inputComponent]="showDetail === true">Test Component Rendered by {{contact.firstName}} {{contact.lastName}}</h1>
    <div *ngIf="showDetail === true">Awesome {{contact.firstName}}</div>
    <twowaybinding></twowaybinding>
    `,
    styleUrls : ['src/css/my-component.css'],
    directives : [TwowaybindingComponent]
})

export class TestComponent {

	public contact = {firstName : 'Karthiksundar',lastName : 'Srinivasan'};
	
	public showDetail = false;
	
	onSelect(){
	 this.showDetail = true;
	} 
}