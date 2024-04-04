import { Component, Input, computed } from '@angular/core';
import { Details } from '../model/details.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input({ required: true })
  cardDetail!: Details;
  cardClasses = computed((): 'up' | 'down' => {
    return this.cardDetail.icon === 'up' ? 'up' : 'down';
  });
}
