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
import { LocalizationService } from './l10n/l10n.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public l10n;
  title = 'cv-app';
  openedSidenav = false;
  faLightbulb: IconDefinition;

  constructor(
    public store: StoreService,
    private titleService: Title,
    private themeService: ThemeService,
    private localizationService: LocalizationService
  ) {
    this.store.cvData = persoData;
    this.titleService.setTitle('| CV | ' + persoData.profile.lastname); 
    this.themeService.setActiveTheme(dark);
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit(e) {
    this.onResize(e);
    this.getLocalization();
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

