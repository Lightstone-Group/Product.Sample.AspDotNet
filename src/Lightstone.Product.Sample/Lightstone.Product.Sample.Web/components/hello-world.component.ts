import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {

    @property({type: String})
    name: String = "World";
    protected render(): TemplateResult {
        return html`<h1>Hello ${this.name}!</h1>`;
    }
}