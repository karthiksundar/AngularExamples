import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";


@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <h1>Sayi Prasanth is very intelligent and smart</h1>
        <my-component></my-component>

    `,
    directives: [MyComponentComponent]
})
export class AppComponent {

}