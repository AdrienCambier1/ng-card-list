import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../interfaces/product";

@Pipe({
  name: "sortByDate",
})
export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], order?: string) {
    return order === "asc"
      ? products.sort(
          (a, b) => a.createdDate.getTime() - b.createdDate.getTime()
        )
      : order === "desc"
      ? products.sort(
          (a, b) => b.createdDate.getTime() - a.createdDate.getTime()
        )
      : products;
  }
}
