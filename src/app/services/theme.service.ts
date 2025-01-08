import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'light';

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.theme = savedTheme;
      this.applyTheme(savedTheme);
    }
  }

  private saveTheme() {
    localStorage.setItem('theme', this.theme);
  }

  private applyTheme(theme: 'light' | 'dark') {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }

  getTheme(): 'light' | 'dark' {
    return this.theme;
  }
  
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.theme);
    this.saveTheme();
  }
}
