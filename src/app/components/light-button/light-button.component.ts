import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-button',
  imports: [],
  templateUrl:'light-button.component.html',
  styles: ``
})
export class LightButtonComponent {
  @Input() value: string = '';
}
