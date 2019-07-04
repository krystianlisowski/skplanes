import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Crew } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  form: FormGroup;
  jobs = [
    { label: 'Stwaredess', value: 'stweradess'},
    { label: 'Senior Cabin Crew', value: 'senior_cabin_crew'},
    { label: 'Pilot', value:'pilot'},
    { label: 'Co-Pilot', value: 'co_pilot'},
    { label: 'Mechanic', value: 'mechanic'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: ''
    })
  }

  get crew(){
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(index: number){
    this.crew.removeAt(index);
  }

  addCrewMember(){
    this.crew.push(this.buildCrewMember());
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      code: ['SK', {validators: [Validators.required, Validators.minLength(4), Validators.maxLength(8)]}],
      origin: ['', {validators: [Validators.required]}],
      destination: ['', {validators: [Validators.required]}],
      departureTime: ['', {validators: [Validators.required]}],
      returnTime: ['', {validators: [Validators.required]}],
      additionalInformation: '',
      withSK: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }
}
