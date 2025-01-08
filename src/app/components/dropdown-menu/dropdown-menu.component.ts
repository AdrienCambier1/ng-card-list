import { Component, Input } from '@angular/core';
import { DropdownMenu } from '../../interfaces/dropdown-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-menu',
  imports: [CommonModule],
  templateUrl: './dropdown-menu.component.html',
  styles: ``
})
export class DropdownMenuComponent {
  @Input() isDropdownMenuOpen: boolean = false;
  @Input() items: DropdownMenu[] = [];
}
