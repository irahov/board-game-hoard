import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GameDetailComponent }
    ])
  ],
  declarations: [GameDetailComponent]
})
export class StoreFeatureGameDetailModule {}
