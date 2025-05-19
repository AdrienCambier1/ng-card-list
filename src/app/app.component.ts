import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
  template: `
    <app-header />
    <main class="min-h-screen !pt-16 p-6">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = "Card List";
}
