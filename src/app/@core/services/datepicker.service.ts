import { Injectable } from '@angular/core';
import { MS_PER_DAY} from './../constants/time';
@Injectable({
  providedIn: 'root'
})
export class DatepickerService {
  /**
   * Obtain Date friendly data
   * @param data Data Object to use to convert to friendly format YYYY/MM/DD
   * @param printZero To print with prefix 0 if values < 10
   */
  getData(data: Date, printZero: boolean = false): string {
    let dateDay: string = String(data.getDate());
    if (+dateDay < 10 && printZero) {
      dateDay = `0${dateDay}`;
    }
    let month: string = String(data.getMonth() + 1);
    if (+month < 10 && printZero) {
      month = `0${month}`;
    }
    console.log(`${dateDay}/${month}/${data.getFullYear()}`);
    return `${dateDay}/${month}/${data.getFullYear()}`;
  }
  /**
   * Convert data with friendly format to show hour HH:MM
   * @param data Data object to use to convert in friendly hour
   */
  getHour(data: Date): string {
    let minutes = String(data.getMinutes());
    if (+minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${data.getHours()}:${minutes}`;
  }
  /**
   * Add specific days count to select date or now date
   * @param days add days in select date
   * @param customDate Specify date if use select date
   */
  addDays(days: number, fecha, customDate: string = '', ) {
    let date = new Date(fecha);
    if (customDate !== '') {
      date = new Date(customDate);
    }
    date.setDate(date.getDate() + days);
    return date;
  }

  getDaysBetweenDatas(finish, start): number {
    return Math.round((finish - start) / MS_PER_DAY);
  }

  setDataValues(dataV, data) {
    data[0] = dataV.getFullYear();
    data[1] = dataV.getMonth();
    data[2] = dataV.getDate();
    return data;
  }

  minusYears(year: number = 18) {
    const expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() - year);
    expireDate.setDate(expireDate.getDate() - 1);
    console.log(expireDate.toString());
    return expireDate;
  }
}
