import {Component} from 'angular2/core';

@Component({
    selector: 'twowaybinding',
    template: `<div >My age is {{age}}</div>
    	<input [(ngModel)]="age" />
    	`
})

export class TwowaybindingComponent implements OnInit {

    public age;

    onSelect(ageValue) {
        this.age = ageValue;
    }

    ngOnInit() {
        this.onSelect(27);
    }

}