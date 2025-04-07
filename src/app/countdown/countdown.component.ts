import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [MatCardModule, RouterModule, MatButton],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  public daysRemaining: number = 0;
  public hoursRemaining: number = 0;
  public minutesRemaining: number = 0;
  public secondsRemaining: number = 0;
  private intervalId: any;

  openLink(): void {
    window.open('https://www.youtube.com/live/5fSuSGFhjBg', '_blank');
  }
  // Fecha objetivo: 6 de abril de 2024 a las 14:00 (hora Ecuador)
  public targetDate: Date = new Date('2025-04-06T14:00:00-05:00'); // Hora Ecuador (UTC -5)

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
      this.daysRemaining = Math.floor(timeDiff / (1000 * 3600 * 24)); // Días restantes
      this.hoursRemaining = Math.floor(
        (timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)
      ); // Horas restantes
      this.minutesRemaining = Math.floor(
        (timeDiff % (1000 * 3600)) / (1000 * 60)
      ); // Minutos restantes
      this.secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000); // Segundos restantes
    } else {
      this.daysRemaining = 0;
      this.hoursRemaining = 0;
      this.minutesRemaining = 0;
      this.secondsRemaining = 0;
      clearInterval(this.intervalId); // Detener la cuenta cuando llegue a la fecha
    }
  }

  get formattedTime(): string {
    return `Días ${this.daysRemaining} | ${this.padTime(
      this.hoursRemaining
    )} Horas Minutos ${this.padTime(
      this.minutesRemaining
    )} Segundos ${this.padTime(this.secondsRemaining)}`;
  }

  private padTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }
}
