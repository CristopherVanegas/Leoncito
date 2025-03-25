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
    },
    {
      day: 'Día 3',
      description: 'El día de ayer no pude irlo a visitar pero fue mi mamá y mi hermana, Leoncito se animó para sobarse en el dedito de mi hermana. Se nota que la extrañaba, ya tenía un día sin verla. Se ve que eso lo animó. Va mejorando, está más alerta pero todavía tiene que salir bien del cuadro de como ingresó. La doctora me dijo que todavía orina un poco rojo pero ya no como antes. Sigue alimentándose por la sonda nasogastrica y le están hidratando por suero. Espero que pronto lo tengamos en casa. Muchas gracias a todos los que han donado y apoyado con las rifas, el gatito va mejorando gracias a su apoyo 😭',
      mediaItems: [
        { type: 'image', url: 'media/Dia3/31.jpeg' },
        { type: 'image', url: 'media/Dia3/32.jpeg' },
        { type: 'video', url: 'media/Dia3/vid2.mp4' },
        { type: 'image', url: 'media/Dia3/vid3.mp4' }
      ] as MediaItem[]
    }
    // Puedes agregar más días según sea necesario.
  ];
}
