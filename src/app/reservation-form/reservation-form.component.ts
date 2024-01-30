import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate : ['', Validators.required],
      checkOutDate : ['', Validators.required],
    });
  }
  constructor(private formBuilder:FormBuilder) {
    
   }
  reservationForm: FormGroup = new FormGroup({

  });
  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('form is valid');
    }
  }
}
