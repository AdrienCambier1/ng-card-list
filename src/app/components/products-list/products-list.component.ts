import { Component, inject, Input } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { ProductCardComponent } from "../product-card/product-card.component";
import { SearchFilterPipe } from "../../pipes/search-filter.pipe";
import { SortByDatePipe } from "../../pipes/sort-by-date.pipe";
import { SortByNamePipe } from "../../pipes/sort-by-name.pipe";

@Component({
  selector: "app-products-list",
  imports: [
    ProductCardComponent,
    SearchFilterPipe,
    SortByDatePipe,
    SortByNamePipe,
  ],
  templateUrl: "./products-list.component.html",
  styles: ``,
})
export class ProductsListComponent {
  productService = inject(ProductService);
  products = this.productService.getProducts();
  @Input() searchTerm: string = "";
  @Input() sortOrder: string = "";
}
