import {Component} from 'angular2/core';
import {TestComponent} from "./test.component"
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `<h1 [style.color]="inputElement.value==='yes'?'red':''">{{name}} is a great fighter</h1><br>
                <span [class.inputComponent]="inputElement.value==='yes'">Awesome</span><br>
                <input type="text" id="text" #inputElement (keyup)="0">
<button [disabled]="inputElement.value!=='yes'">Click</button>
<test1></test1>
` ,
    styleUrls: ['src/css/my-component.css'],
    directives: [TestComponent]

})
export class MyComponentComponent implements OnInit {
    name: string;

    ngOnInit(): any {
        this.name = "Sayi";
    }

}