import { Component, OnInit } from '@angular/core';
import { DatepickerService } from 'src/app/@core/services/datepicker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  max: any;
  constructor(private datePicketService: DatepickerService) { }
  fecha: any;
  ngOnInit() {
    this.max = this.datePicketService.minusYears(18);
  }
  onChange(timeEvent: number, value: any) {
    console.log(this.datePicketService.minusYears(18));
    console.log(value._selected);
    console.log(this.datePicketService.getData(value._selected));
  }
}
