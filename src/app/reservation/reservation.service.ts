import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({ // this is the injectable decorator
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    const reservations = localStorage.getItem('reservations');
    if (reservations) {
      this.reservations = JSON.parse(reservations);
    }
  } 
  // CRUD operations

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(reservation => reservation.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
    console.log(this.reservations);
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter(reservation => reservation.id !== id);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
    
  }

  updateReservation(id: string, reservation: Reservation): void {
    const index = this.reservations.findIndex(reservation => reservation.id === id);
    this.reservations[index] = reservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
    console.log(" updateReservation")
  }
}
