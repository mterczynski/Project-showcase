import { t } from "../utils/language.js";

export class Notification extends HTMLElement {
  constructor() {
    super();
    this.t = t();
  }

  connectedCallback() {
    document.title = this.t.title;
    this.render();
  }

  render() {
    this.innerHTML = `
     <div style="margin-top: 5rem" class="ui container"> 
<div class="ui message">
        <div class="header">${this.t.accessNotice.title}</div>
        <p>${this.t.accessNotice.description}</p>
      </div>
        </div>
    `;
  }
}

customElements.define("app-notify", Notification);
