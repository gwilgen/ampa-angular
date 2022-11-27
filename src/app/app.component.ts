import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  langs = ["?"]
  userOptions: string[] = []
  footerLinks = ['faq', 'contact', 'omr', 'school']

  constructor(private translate: TranslateService) {
    this.changeLang(translate.defaultLang)
  }

  changeLang(key: string) {
    const self = this
    this.translate.use(key)
    this.translate.get('langs')
      .subscribe(langs => self.langs = Object.keys(langs));
    this.translate.get('user.options')
      .subscribe(options => self.userOptions = Object.keys(options));
  }

  isCurrentLang(key: string) {
    return this.translate.currentLang === key
  }

  toggleSidenav() {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
      window.scroll(0,0);
    }
  }

  closeSidenav(e: any) {
    if ('A' == e.target['tagName']) {
      this.sidenav.close();
    }
  }

  isLoggedIn() {
    return false;
  }
}
