import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-search-input",
  imports: [FormsModule],
  templateUrl: "./search-input.component.html",
  styles: ``,
})
export class SearchInputComponent {
  @Input() value: string = "";
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
