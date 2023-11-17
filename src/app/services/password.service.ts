import { Injectable } from '@angular/core';
import { passwordStrengthBar } from '../models/passwordStrengthBar.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }
  
  checkPasswordStrength(password: string): passwordStrengthBar {
    let easyRegex = /(?:\d+|[a-zA-Z]+|[!@#$%^&*()-_=+]+)/;
    let mediumRegex =
      /^(?:(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+|(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_]+|(?=.*\d)(?=.*[\W_])[\d\W_]+)$/;
    let strongRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).+$/;

    let result: passwordStrengthBar = {
      bar0: 'grey',
      bar1: 'grey',
      bar2: 'grey',
    };

    if (password.length < 8) {
      result.bar0 = 'red';
      result.bar1 = 'red';
      result.bar2 = 'red';
    } else if (strongRegex.test(password)) {
      result.bar0 = 'green';
      result.bar1 = 'green';
      result.bar2 = 'green';
    } else if (mediumRegex.test(password)) {
      result.bar0 = 'yellow';
      result.bar1 = 'yellow';
      result.bar2 = 'grey';
    } else if (easyRegex.test(password)) {
      result.bar0 = 'red';
      result.bar1 = 'grey';
      result.bar2 = 'grey';
    }
    return result;
  }
}
