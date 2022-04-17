import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwind';
  public isDark: boolean = false;
  @HostBinding('class')
  get themeMode(): string {
    return this.isDark ? 'dark' : 'light'
  }
  switchMode(event: Event){
    this.isDark = !this.isDark;
  }
}
