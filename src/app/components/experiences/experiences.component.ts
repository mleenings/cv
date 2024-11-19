import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { LocalizationService } from '../../l10n/l10n.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  public l10n;

  constructor(
    public store: StoreService, 
    private localizationService: LocalizationService
  )
  { 
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit() {
    this.getLocalization();
  }
}
