import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import { TemplateHeader } from './templates/template-header';
import { TemplateNavbar } from './templates/template-navbar';
import { EmployeeComponent } from './components/employees-component';

export class ProjectBootstrap extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div id="wrapper">
        <template-header></template-header>

        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <template-navbar></template-navbar>
            <employees-component></employees-component>
          </div>
        </div>
      </div>
    `;
  }
}
