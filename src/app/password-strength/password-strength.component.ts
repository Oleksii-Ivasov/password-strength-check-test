import { Component, Input } from '@angular/core';
import { passwordStrengthBar } from '../models/passwordStrengthBar.model';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  @Input() passwordStrength: passwordStrengthBar = {
    bar0: 'grey',
    bar1: 'grey',
    bar2: 'grey',
  };
}
