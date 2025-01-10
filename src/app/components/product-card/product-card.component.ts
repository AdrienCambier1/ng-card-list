import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "../../interfaces/product";
import { CommonModule } from "@angular/common";
import { DarkButtonComponent } from "../dark-button/dark-button.component";

@Component({
  selector: "app-product-card",
  imports: [CommonModule, DarkButtonComponent],
  templateUrl: "./product-card.component.html",
  styles: ``,
})
export class ProductCardComponent {
  @Input({ required: true }) product: Product = {
    id: 0,
    name: "",
    createdDate: new Date(),
    isFavorite: false,
    imageUrl: "",
  };
  @Output() addItemEvent = new EventEmitter<number>();

  switchfav() {
    this.product.isFavorite = !this.product.isFavorite;
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }
}
