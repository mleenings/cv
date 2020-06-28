import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-voluntary',
  templateUrl: './voluntary.component.html',
  styleUrls: ['./voluntary.component.scss']
})
export class VoluntaryComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

}
