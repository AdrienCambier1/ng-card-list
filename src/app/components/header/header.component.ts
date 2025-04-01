import { Component } from "@angular/core";
import { DarkButtonComponent } from "../dark-button/dark-button.component";
import { ThemeService } from "../../services/theme.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  imports: [DarkButtonComponent, CommonModule],
  templateUrl: "header.component.html",
  styles: ``,
})
export class HeaderComponent {
  isDarkTheme: boolean = false;
  constructor(public themeService: ThemeService) {}

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.getTheme() === "dark";
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.getTheme() === "dark";
  }
}
