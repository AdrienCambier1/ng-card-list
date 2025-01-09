import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, RouterModule],
  template: `
    <app-header />
    <main class="min-h-screen pt-16 p-8 bg-neutral-100 dark:bg-neutral-950">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = "Card List";
}
