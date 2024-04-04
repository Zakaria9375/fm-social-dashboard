import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { cardslist, detailList } from './data';
import { Card } from './model/card.interface';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { Details } from './model/details.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ThemeSwitcherComponent,
    CardComponent,
    DetailsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cards: Card[] = cardslist;
  cardDetails: Details[] = detailList
}
