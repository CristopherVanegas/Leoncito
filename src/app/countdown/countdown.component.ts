import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Asegúrate de importar MatCardModule

@Component({
  selector: 'app-countdown',
  standalone: true, // Usar esta propiedad si estás trabajando sin módulos
  imports: [MatCardModule], // Importar MatCardModule para usar los componentes de Angular Material
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  public timeLeft: number = 0;
  private intervalId: any;
  public targetDate: Date = new Date('2025-04-06T00:00:00'); // Fecha de la rifa
  public daysRemaining: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiar el intervalo cuando se destruya el componente
    }
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.calculateTimeLeft();
    }, 1000); // Actualizar cada 1 segundo
  }

  calculateTimeLeft() {
    const now = new Date();
    const timeDiff = this.targetDate.getTime() - now.getTime();

    if (timeDiff > 0) {
      this.daysRemaining = Math.floor(timeDiff / (1000 * 3600 * 24)); // Calcular días restantes
    } else {
      this.daysRemaining = 0; // Si ya pasó la fecha, mostramos 0 días
      clearInterval(this.intervalId); // Detener la cuenta cuando llegue a la fecha
    }
  }

  get formattedTime(): string {
    return `${this.daysRemaining} día${
      this.daysRemaining !== 1 ? 's' : ''
    } restante${this.daysRemaining !== 1 ? 's' : ''}`;
  }
}
