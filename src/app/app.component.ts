import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    name:string;
    date:Date;
    amount:string;
    miles:number;


    onNameChange(value:string) {
      this.name = value;
    }
    onDateChange (value:Date) {
      this.date = value;
    }
    onChangeAmount(value:string) {
      this.amount = value;
    }
    onChangeMiles(value:string) {
      this.miles = parseFloat(value);
    }
}

