import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { LocalizationService } from '../../l10n/l10n.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
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
