// theme.service.ts
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'indigo-pink';

  setTheme(theme: string) {
    this.currentTheme = theme;
  }

  getTheme() {
    return this.currentTheme;
  }
}
