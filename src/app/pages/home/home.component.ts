import { Component, inject } from "@angular/core";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { DarkButtonComponent } from "../../components/dark-button/dark-button.component";
import { DropdownMenu } from "../../interfaces/dropdown-menu";
import { DropdownMenuComponent } from "../../components/dropdown-menu/dropdown-menu.component";
import { CommonModule } from "@angular/common";
import { SortByDatePipe } from "../../pipes/sort-by-date.pipe";
import { SearchFilterPipe } from "../../pipes/search-filter.pipe";
import { SortByNamePipe } from "../../pipes/sort-by-name.pipe";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-home",
  imports: [
    ProductCardComponent,
    SearchInputComponent,
    DarkButtonComponent,
    DropdownMenuComponent,
    CommonModule,
    SortByDatePipe,
    SearchFilterPipe,
    SortByNamePipe,
  ],
  templateUrl: "home.component.html",
  styles: ``,
})
export class HomeComponent {
  countfav = 0;
  characters = inject(ProductService).getProducts();
  isDropdownMenuOpen: boolean = false;
  sortOrderDate: boolean = true;
  sortOrderName: boolean = true;
  searchTerm: string = "";

  menuItems: DropdownMenu[] = [
    { value: "Ordre croissant", action: () => this.setSortOrderDate(true) },
    { value: "Ordre décroissant", action: () => this.setSortOrderDate(false) },
    { value: "Ordre A-Z", action: () => this.setSortOrderName(true) },
    {
      value: "Ordre Z-A",
      action: () => this.setSortOrderName(false),
    },
  ];

  addItem(item: number) {
    this.countfav += item;
  }

  toggleDropDown() {
    this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
  }

  setSortOrderDate(asc: boolean) {
    this.sortOrderDate = asc;
    this.toggleDropDown();
  }

  setSortOrderName(alphabetical: boolean) {
    this.sortOrderName = alphabetical;
    this.toggleDropDown();
  }
}
