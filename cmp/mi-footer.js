class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Cristina Leon Salmeron
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
