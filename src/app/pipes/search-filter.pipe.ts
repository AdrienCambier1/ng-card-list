import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../interfaces/product";

@Pipe({
  name: "searchFilter",
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: Product[], searchTerm: string): Product[] {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return value.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
}
