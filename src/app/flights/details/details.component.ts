import { Component, OnInit, Input, Inject } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() flight: Flight;
  constructor(private dialogRef: MatDialogRef<DetailsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Flight,
              private router: Router
              ) {
                this.flight = data;
               }

  closeDetails(){
    this.dialogRef.close();
  }

  goToEditFlight(){
    this.dialogRef.close();
    this.router.navigate(['/dashboard/flights', this.flight.key]);

  }
}
