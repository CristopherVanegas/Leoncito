import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DonarDialogComponent } from '../donar-dialog/donar-dialog.component';

@Component({
  selector: 'app-donar',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, DonarDialogComponent],
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DonarDialogComponent, {
      panelClass: 'donar-dialog-panel',
      backdropClass: 'orange-backdrop',
      disableClose: false  // Permite cerrar haciendo click fuera del diálogo
    });
  }
}
