import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, RouterModule],
  template: `
    <app-header />
    <main class="min-h-[100vh] !pt-16 p-6">
      <router-outlet />
    </main>
    <footer><p class="dark-text text-sm">© 2025, Adrien Cambier</p></footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "Card List";
}
