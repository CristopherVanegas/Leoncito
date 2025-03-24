import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donar-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="dialog-content">
      <h2>Datos para Donar</h2>
      <p>Número de cuenta: <strong>1234-5678-9012-3456</strong></p>
      <button mat-button color="primary" (click)="close()">Ok</button>
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 1.5rem;
      text-align: center;
    }
  `]
})
export class DonarDialogComponent {
  constructor(private dialogRef: MatDialogRef<DonarDialogComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
