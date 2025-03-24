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
      <p><strong>Banco Guayaquil</strong></p>
      <p>Nombre: <strong>Vanegas Santi Cristopher Julinho</strong></p>
      <p>Ahorro: <strong>#0035084317</strong></p>
      <p>Correo: <strong>cristopher.platzi&#64;gmail.com</strong></p>
      <p>CI:<strong>1600940736</strong></p>
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
