import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDayComponent, MediaItem } from '../card-day/card-day.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DonarComponent } from '../donar/donar.component';
import { CountdownComponent } from '../../countdown/countdown.component';
import { MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardDayComponent,
    MatToolbarModule,
    DonarComponent,
    CountdownComponent,
    MatCardHeader,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'Seguimiento del Leoncito 🦁';

  // Datos de ejemplo para los días de seguimiento
  days = [
    {
      day: 'Día 1',
      description:
        'Leoncito inicia su tratamiento hoy. Se muestra deprimido y cansado. Tenemos fé en que pronto se recuperará.',
      mediaItems: [
        { type: 'image', url: 'media/Dia1/11.jpeg' },
        { type: 'image', url: 'media/Dia1/12.jpeg' },
        { type: 'image', url: 'media/Dia1/13.jpeg' },
        { type: 'image', url: 'media/Dia1/14.jpeg' },
        { type: 'image', url: 'media/Dia1/15.jpeg' },
      ] as MediaItem[],
    },
    {
      day: 'Día 2',
      description:
        'La doctora nos dijo que no se ha descompensado, está más alerta, ha mejorado un poco su hidratación y que fue capaz de comer un poquito de una barrita nutritiva de forma asistida. Esperemos que en los siguientes días mejore Leoncito.',
      mediaItems: [
        { type: 'image', url: 'media/Dia2/21.jpeg' },
        { type: 'video', url: 'media/Dia2/vid1.mp4' },
        { type: 'image', url: 'media/Dia2/22.jpg' },
        // { type: 'image', url: 'media/Dia2/23.jpeg' },
        { type: 'image', url: 'media/Dia2/24.jpeg' },
        { type: 'image', url: 'media/Dia2/25.jpeg' },
        { type: 'image', url: 'media/Dia2/26.jpeg' },
        { type: 'image', url: 'media/Dia2/27.jpeg' },
      ] as MediaItem[],
    },
    {
      day: 'Día 3',
      description:
        'El día de ayer no pude irlo a visitar pero fue mi mamá y mi hermana, Leoncito se animó para sobarse en el dedito de mi hermana. Se nota que la extrañaba, ya tenía un día sin verla. Va mejorando, está más alerta pero todavía tiene que salir del cuadro en como ingresó. La doctora dijo que todavía orina un poco rojo pero ya no como antes. Sigue alimentándose por la sonda nasogastrica y le están hidratando por suero. Espero que pronto lo tengamos en casa. Muchas gracias a todos los que han donado y apoyado con las rifas, el gatito va mejorando gracias a su apoyo 😭',
      mediaItems: [
        { type: 'image', url: 'media/Dia3/31.jpeg' },
        { type: 'image', url: 'media/Dia3/32.jpeg' },
        { type: 'video', url: 'media/Dia3/vid2.mp4' },
      ] as MediaItem[],
    },
    {
      day: 'Día 4',
      description:
        'Ese día tampoco pude irlo a ver, Martes día de semana. Leoncito estaba algo sedado parece. Le habían hecho un eco y se encontraba dentro de los parámetros según la doctora.',
      mediaItems: [
        { type: 'image', url: 'media/Dia4/41.jpeg' },
        { type: 'video', url: 'media/Dia4/v41.mp4' },
      ] as MediaItem[],
    },
    {
      day: 'Día 5',
      description:
        'Buenas días , de parte del área de internado enviamos un informe de la guardia nocturna del paciente Leoncito. Durante la mañana se le ofreció alimento de forma asistida y recepto un poco, sin embargo se continúa con su alimentación por sonda. Dentro de sus signos vitales permanecen dentro de los parámetros normales. Por la noche  orinó, no ha defecado. Continuaremos con su medicina, y evaluación médica. Ese es un mensaje de la guarda nocturna. Leoncito está mejorando poco a poco. 🥲',
      mediaItems: [{ type: 'video', url: 'media/Dia5/v51.mp4' }] as MediaItem[],
    },
    {
      day: 'Día 6',
      description:
        'Buenos días 😊le saludamos de parte del área de internado para enviarle  un reporte de Leoncito, se ha mantenido activo y alerta, lo hemos visto acicalandose, le hemos estado dando aún su  alimentación por la sonda, sus parámetros se encuentran dentro del rango, igualmente la seguiremos envaluando en el transcurso del día y le estaremos informando, que tenga buen día 😊. Leoncito está más alerta, esperemos pronto pueda estar con nosotros.🦁',
      mediaItems: [
        { type: 'video', url: 'media/Dia6/v61.mp4' },
        { type: 'video', url: 'media/Dia6/v62.mp4' },
      ] as MediaItem[],
    },
    {
      day: 'Día 7',
      description:
        'Buenas noches estimado Cristopher Vanegas, le saludamos del área de internado informándole que el día de hoy Leoncito se le realizó una ecografía de control en dónde se observó que la vejiga presenta una pared menos inflamada y se encuentran menos coágulos, a su vez se le realizó una infusión de antihemorragico ya que en su orina aún presenta sangre, se le sigue alimentando por su sonda de alimentación, sus parámetros se encuentran dentro de rango. Cualquier novedad le estaremos comunicando. Leoncito espero que pronto ya no orine sangre y se sienta mejor. 🥲',
      mediaItems: [{ type: 'video', url: 'media/Dia7/v71.mp4' }] as MediaItem[],
    },
    // Puedes agregar más días según sea necesario.
  ];
}
