import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { StoreService } from "../../services/store.service";
import { LocalizationService } from '../../l10n/l10n.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public l10n;

  constructor(
    library: FaIconLibrary, 
    faConfig: FaConfig,
    public store: StoreService,
    private localizationService: LocalizationService
  ) {
    library.addIconPacks(fas, far, fab);
    faConfig.defaultPrefix = 'far';
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit() {
    this.getLocalization();
  }

}
