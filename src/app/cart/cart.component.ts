import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items: Array<object>;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }
  onSubmit(customerData) {
    console.warn(`Your order has been submited ${customerData}`);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}
