import { Component } from '@angular/core';
import { Characters } from '../../data/characters.data';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { DarkButtonComponent } from '../../components/dark-button/dark-button.component';
import { DropdownMenu } from '../../interfaces/dropdown-menu';
import { DropdownMenuComponent } from "../../components/dropdown-menu/dropdown-menu.component";
import { CommonModule } from '@angular/common';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';

@Component({
  selector: 'app-home',
  imports: [
    ProductCardComponent,
    SearchInputComponent,
    DarkButtonComponent,
    DropdownMenuComponent,
    CommonModule,
    SortByDatePipe,
  ],
  templateUrl: 'home.component.html',
  styles: ``
})
export class HomeComponent {
  countfav = 0;
  characters = Characters;
  isDropdownMenuOpen:boolean = false;
  sortOrder: boolean = true;

  menuItems: DropdownMenu[] = [
    {value:"Ordre croissant", action:()=> this.setSortOrder(true)},
    {value:"Ordre décroissant", action:()=> this.setSortOrder(false)},
  ];

  addItem(item: number) {
    this.countfav += item;
  }

  toggleDropDown() {
    this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
  }

  setSortOrder(asc: boolean) {
    this.sortOrder = asc;
    this.toggleDropDown();
  }
}
