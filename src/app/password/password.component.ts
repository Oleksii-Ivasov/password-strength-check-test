import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthBar } from '../models/passwordStrengthBar.model';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  constructor(private passwordService: PasswordService) {}

  passwordForm!: FormGroup;

  ngOnInit() {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
    });
  }

  getPasswordStrength(): passwordStrengthBar {
    const passwordControl = this.passwordForm.get('password');
    if (passwordControl && passwordControl.touched) {
      const password = passwordControl.value;
      return this.passwordService.checkPasswordStrength(password);
    }
    return {
      bar0: 'grey',
      bar1: 'grey',
      bar2: 'grey',
    };
  }
}
