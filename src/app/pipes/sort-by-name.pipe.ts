import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../interfaces/product";

@Pipe({
  name: "sortByName",
})
export class SortByNamePipe implements PipeTransform {
  transform(value: Product[], alphabetical?: boolean) {
    return value.sort((a, b) =>
      alphabetical ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }
}
