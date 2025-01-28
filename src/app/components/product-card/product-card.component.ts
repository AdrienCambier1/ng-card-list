import { Component, Input, inject } from "@angular/core";
import { Product } from "../../interfaces/product";
import { CommonModule } from "@angular/common";
import { DarkButtonComponent } from "../dark-button/dark-button.component";
import { ProductService } from "../../services/product.service";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr"; // Importation de la locale française
import { LOCALE_ID } from "@angular/core";

registerLocaleData(localeFr, "fr");

@Component({
  selector: "app-product-card",
  imports: [CommonModule, DarkButtonComponent],
  providers: [{ provide: LOCALE_ID, useValue: "fr" }], // Définition de la locale française
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
