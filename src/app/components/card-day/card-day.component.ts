import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

@Component({
  selector: 'app-card-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-day.component.html',
  styleUrls: ['./card-day.component.css']
})
export class CardDayComponent {
  @Input() day: string = '';
  @Input() description: string = '';
  @Input() mediaItems: MediaItem[] = [];

  currentIndex: number = 0;

  next() {
    if (this.mediaItems.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.mediaItems.length;
    }
  }

  prev() {
    if (this.mediaItems.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
    }
  }
}
