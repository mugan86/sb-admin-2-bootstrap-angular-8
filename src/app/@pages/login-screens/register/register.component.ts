import { Component, OnInit } from '@angular/core';
import { DatepickerService } from 'src/app/@core/services/datepicker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private datePicketService: DatepickerService) { }

  ngOnInit() {
  }
  onChange(timeEvent: number, value: any) {
    console.log(value._selected);
    console.log(this.datePicketService.getData(value._selected));
  }
}
