import { Component, Input, inject } from "@angular/core";
import { Product } from "../../interfaces/product";
import { CommonModule } from "@angular/common";
import { DarkButtonComponent } from "../dark-button/dark-button.component";
import { ProductService } from "../../services/product.service";

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

  productService = inject(ProductService);

  switchfav() {
    this.productService.switchFav(this.product);
  }
}
