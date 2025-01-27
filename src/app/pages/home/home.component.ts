import { Component, inject } from "@angular/core";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DarkButtonComponent } from "../../components/dark-button/dark-button.component";
import { DropdownMenu } from "../../interfaces/dropdown-menu";
import { DropdownMenuComponent } from "../../components/dropdown-menu/dropdown-menu.component";
import { CommonModule } from "@angular/common";
import { ProductService } from "../../services/product.service";
import { ProductsListComponent } from "../../components/products-list/products-list.component";

@Component({
  selector: "app-home",
  imports: [
    SearchInputComponent,
    DarkButtonComponent,
    DropdownMenuComponent,
    CommonModule,
    ProductsListComponent,
  ],
  templateUrl: "home.component.html",
  styles: ``,
})
export class HomeComponent {
  productService = inject(ProductService);
  isDropdownMenuOpen: boolean = false;
  sortOrder: string = "asc";
  searchTerm: string = "";
  countFav = 0;

  constructor() {
    this.productService.favoriteCount$.subscribe((count) => {
      this.countFav = count;
    });
  }

  menuItems: DropdownMenu[] = [
    { value: "Ordre croissant", action: () => this.setSortOrder("asc") },
    { value: "Ordre décroissant", action: () => this.setSortOrder("desc") },
    { value: "Ordre A-Z", action: () => this.setSortOrder("a-z") },
    {
      value: "Ordre Z-A",
      action: () => this.setSortOrder("z-a"),
    },
  ];

  toggleDropDown() {
    this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
  }

  setSortOrder(order: string) {
    this.sortOrder = order;
    this.toggleDropDown();
  }
}
