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
      description: 'Leoncito inicia su tratamiento hoy. Se muestra deprimido y cansado. Tenemos fé en que pronto se recuperará.',
      mediaItems: [
        { type: 'image', url: 'media/Dia1/11.jpeg' },
        { type: 'image', url: 'media/Dia1/12.jpeg' },
        { type: 'image', url: 'media/Dia1/13.jpeg' },
        { type: 'image', url: 'media/Dia1/14.jpeg' },
        { type: 'image', url: 'media/Dia1/15.jpeg' },
      ] as MediaItem[]
    },
    {
      day: 'Día 2',
      description: 'La doctora nos dijo que no se ha descompensado, está más alerta, ha mejorado un poco su hidratación y que fue capaz de comer un poquito de una barrita nutritiva de forma asistida. Esperemos que en los siguientes días mejore Leoncito.',
      mediaItems: [
        { type: 'image', url: 'media/Dia2/21.jpeg' },
        { type: 'video', url: 'media/Dia2/vid1.mp4' },
        { type: 'image', url: 'media/Dia2/22.jpg' },
        { type: 'image', url: 'media/Dia2/23.jpeg' },
        { type: 'image', url: 'media/Dia2/24.jpeg' },
        { type: 'image', url: 'media/Dia2/25.jpeg' },
        { type: 'image', url: 'media/Dia2/26.jpeg' },
        { type: 'image', url: 'media/Dia2/27.jpeg' },
        { type: 'image', url: 'media/Dia2/28.jpeg' },
      ] as MediaItem[]
    }
    // Puedes agregar más días según sea necesario.
  ];
}
