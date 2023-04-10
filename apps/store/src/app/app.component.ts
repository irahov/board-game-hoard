import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {StoreUiSharedModule} from "@bg-hoard/store/ui-shared";
import {formatRating} from "@bg-hoard/store/util-formatters";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, StoreUiSharedModule]
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();

  formatRating = formatRating;
}
