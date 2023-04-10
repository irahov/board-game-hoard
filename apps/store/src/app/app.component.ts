import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule]
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
}
