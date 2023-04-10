import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {StoreUiSharedModule} from "@bg-hoard/store/ui-shared";
import {formatRating} from "@bg-hoard/store/util-formatters";
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Game} from "@bg-hoard/util-interface";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, StoreUiSharedModule, RouterModule, HttpClientModule]
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  formatRating = formatRating;
  games = this.http.get<Game[]>('/api/games');
}
