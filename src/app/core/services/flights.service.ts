import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from '../../models/flight.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) {}

  getFlights(): Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  addFlight(flight: Flight) {
    return this.db.list<Flight>(this.API_URL).push(flight);
  }
  getFlight(key: string) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
    .pipe(map(flight => this.assignKey(flight)));
  }
  editFlight(key: string, flight: Flight){
    return this.db.object<Flight>(`${this.API_URL}/${key}`).update(flight);
  }
  removeFlight(key: string){
    return this.db.object<Flight>(`${this.API_URL}/${key}`).remove()
  }

  private assignKey(flight) {
    return {...flight.payload.val(), key: flight.key };
  }
}
