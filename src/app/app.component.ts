import { Component, HostListener } from '@angular/core';
import persoData from '../assets/data/perso.json';
import { StoreService } from "./services/store.service";
import { Title } from '@angular/platform-browser';
import { Theme, light, dark } from "./theme/theme";
import {
  faLightbulb as faSolidLightbulb,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";
import { ThemeService } from "./theme/theme.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-app';
  openedSidenav = false;
  faLightbulb: IconDefinition;

  constructor(
    public store: StoreService,
    private titleService: Title,
    private themeService: ThemeService,
  ) {
    this.store.cvData = persoData;
    this.titleService.setTitle('| CV | ' + persoData.profile.lastname); 
    this.themeService.setActiveTheme(dark);
  }

  ngOnInit(e) {
    this.onResize(e);
    this.setLightbulb();
  }

  @HostListener('window:resize')
  onResize(event) {
    let width;

    if (event != undefined) {
      width = event.target.innerWidth;
    }
    else {
      width = document.body.clientWidth;
    }
    console.log(width)
    if (width >= 720) {
      this.openedSidenav = true;
    }
    else {
      this.openedSidenav = false;
    }
  }

  setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faLightbulb = faSolidLightbulb;
    }
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    this.setLightbulb();
  }

}

