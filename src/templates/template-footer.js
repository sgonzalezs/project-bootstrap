import { LitElement, html, css } from 'lit-element';

export class TemplateFooter extends LitElement{

	createRenderRoot () { 
	  return this; 
	}

	render(){
		return html`
			
		`;
	}

}

customElements.define('template-footer', TemplateFooter);