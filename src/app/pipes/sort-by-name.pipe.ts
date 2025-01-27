import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../interfaces/product";

@Pipe({
  name: "sortByName",
})
export class SortByNamePipe implements PipeTransform {
  transform(value: Product[], order?: string) {
    return order === "a-z"
      ? value.sort((a, b) => a.name.localeCompare(b.name))
      : order === "z-a"
      ? value.sort((a, b) => b.name.localeCompare(a.name))
      : value;
  }
}
