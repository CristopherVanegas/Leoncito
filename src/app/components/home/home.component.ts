import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDayComponent, MediaItem } from '../card-day/card-day.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DonarComponent } from "../donar/donar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardDayComponent, MatToolbarModule, DonarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Seguimiento del Leoncito 🦁';

  // Datos de ejemplo para los días de seguimiento
  days = [
    {
      day: 'Día 1',
      description: 'El gatito inicia su tratamiento hoy. Se muestra animado y con signos de recuperación.',
      mediaItems: [
        { type: 'image', url: '../../../assets/media/11.jpeg' },
        { type: 'video', url: '../../../assets/media/Dia1/vid1.mp4' },
      ] as MediaItem[]
    },
    {
      day: 'Día 2',
      description: 'El gatito continúa mejorando. Se observan cambios positivos en su comportamiento.',
      mediaItems: [
        { type: 'image', url: 'assets/media/foto2.jpg' }
      ] as MediaItem[]
    }
    // Puedes agregar más días según sea necesario.
  ];
}
