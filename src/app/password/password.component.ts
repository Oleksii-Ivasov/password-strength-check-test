import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  password: string = '';
  bar0: string = 'grey';
  bar1: string = 'grey';
  bar2: string = 'grey';

  checkPasswordStrength(password: string) {
    let easyRegex = /(?:\d+|[a-zA-Z]+|[!@#$%^&*()-_=+]+)/;
    let mediumRegex =
    /^(?:(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+|(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_]+|(?=.*\d)(?=.*[\W_])[\d\W_]+)$/;
    let strongRegex =/^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).+$/;

    if (password.length < 8) {
      this.bar0 = 'red';
      this.bar1 = 'red';
      this.bar2 = 'red';
    } else if (strongRegex.test(password)) {
      this.bar0 = 'green';
      this.bar1 = 'green';
      this.bar2 = 'green';
    } else if (mediumRegex.test(password)) {
      this.bar0 = 'yellow';
      this.bar1 = 'yellow';
      this.bar2 = 'grey';
    } else if (easyRegex.test(password)) {
      this.bar0 = 'red';
      this.bar1 = 'grey';
      this.bar2 = 'grey';
    }
  }
}
