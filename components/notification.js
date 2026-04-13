import { t } from "../utils/language.js";

export class Notification extends HTMLElement {
  constructor() {
    super();
    this.t = t();
  }

  connectedCallback() {
    this.render();
    this.applyTranslations();
  }

  render() {
    this.innerHTML = `
     <div style="margin-top: 5rem" class="ui container"> 
<div class="ui message">
        <div class="header" id="access-notice-title"></div>
        <p id="access-notice-description"></p>
      </div>
        </div>
    `;
  }

  applyTranslations() {
    const t = this.t;
    const get = (id) => this.querySelector(`#${id}`);

    document.title = t.title;
    get("access-notice-title").innerText = t.accessNotice.title;
    get("access-notice-description").innerText = t.accessNotice.description;
  }
}

customElements.define("app-notify", Notification);
