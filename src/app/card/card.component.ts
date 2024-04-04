import { Component, Input, computed } from '@angular/core';
import { Card } from '../model/card.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true })
  card!: Card;
  cardClasses = computed((): 'up' | 'down' => {
    return this.card.icon === 'up' ? 'up' : 'down'
  });
}
