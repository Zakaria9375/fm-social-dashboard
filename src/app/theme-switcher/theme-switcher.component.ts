import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  switcher: boolean = false;
  toggleTheme(): void {
    this.switcher = !this.switcher;
    localStorage.setItem('user-theme', this.switcher ? 'dark' : 'light');
  }
  constructor() {
    this.initTheme();
  }

  initTheme(): void {
    const storedTheme = localStorage.getItem('user-theme');
    if (storedTheme === 'dark') {
      this.switcher = true;
    } else {
      this.switcher = false;
    }
  }
}
