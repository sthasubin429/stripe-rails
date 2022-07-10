import { Controller } from "@hotwired/stimulus"

const stripe = Stripe('');
const elements = stripe.elements();

var style = {
  base: {
    color: "#32325d",
  }
};



// Connects to data-controller="card"
export default class extends Controller {

  /**
   * Mounts stripe's card component onto html.
   */
  connect() {
    console.log('hello');
    let card = elements.create("card", { style: style });
    card.mount("#card-element");
  }
}
