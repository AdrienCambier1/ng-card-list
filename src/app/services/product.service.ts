import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: Product[] = [
    {
      id: 0,
      name: "Harry Potter",
      isFavorite: false,
      createdDate: new Date(1980, 6, 31),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    },
    {
      id: 1,
      name: "Ronnald Weasley",
      isFavorite: false,
      createdDate: new Date(1980, 3, 1),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
    },
    {
      id: 2,
      name: "Hermione Granger",
      isFavorite: false,
      createdDate: new Date(1979, 8, 19),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    },
    {
      id: 3,
      name: "Neville Londubas",
      isFavorite: false,
      createdDate: new Date(1980, 7, 30),
      imageUrl:
        "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/acteur-harry-potter/neville-londubat/57107813-1-fre-FR/Neville-Londubat.jpg",
    },
    {
      id: 4,
      name: "Albus Dumbledore",
      isFavorite: false,
      createdDate: new Date(1881, 7, 30),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/e8/Dumbledore_-_Prisoner_of_Azkaban.jpg",
    },
    {
      id: 5,
      name: "Severus Snape",
      isFavorite: false,
      createdDate: new Date(1960, 1, 9),
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg",
    },
    {
      id: 6,
      name: "Draco Malfoy",
      isFavorite: false,
      createdDate: new Date(1980, 5, 5),
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
    },
    {
      id: 7,
      name: "Luna Lovegood",
      isFavorite: false,
      createdDate: new Date(1981, 2, 13),
      imageUrl:
        "https://contentful.harrypotter.com/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?q=75&fm=jpg&w=2560",
    },
    {
      id: 8,
      name: "Ginny Weasley",
      isFavorite: false,
      createdDate: new Date(1981, 7, 11),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/e7/Ginny_Weasley_poster.jpg",
    },
    {
      id: 9,
      name: "Fred Weasley",
      isFavorite: false,
      createdDate: new Date(1978, 3, 1),
      imageUrl:
        "https://i.pinimg.com/736x/fa/2a/56/fa2a56d2368e55bb10f48eef46c6d0ce.jpg",
    },
    {
      id: 10,
      name: "George Weasley",
      isFavorite: false,
      createdDate: new Date(1978, 3, 1),
      imageUrl:
        "https://i.pinimg.com/1200x/7d/2d/32/7d2d32f916f9fadc670d6cfbeead03df.jpg",
    },
    {
      id: 11,
      name: "Minerva McGonagall",
      isFavorite: false,
      createdDate: new Date(1935, 9, 4),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/ea/McGonagall_%28screenshot%29.jpg",
    },
    {
      id: 12,
      name: "Hagrid",
      isFavorite: false,
      createdDate: new Date(1928, 11, 6),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg",
    },
    {
      id: 13,
      name: "Sirius Black",
      isFavorite: false,
      createdDate: new Date(1960, 10, 11),
      imageUrl:
        "https://variety.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-29-at-8.52.12-AM.png",
    },
    {
      id: 14,
      name: "Remus Lupin",
      isFavorite: false,
      createdDate: new Date(1960, 2, 10),
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/2f/Remus_Lupin.jpeg",
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number) {
    return this.products[id];
  }
}
