import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class loginPage implements OnInit {
  isChecked: boolean = false;
  loginForm: FormGroup;
  clientVersion = environment.clientVersion;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
    const mode = sessionStorage.getItem('dark_mode');
    this.isChecked = !!mode && mode === '1';
  }

  onChanged(event: MatSlideToggleChange): void {
    document.body.classList.toggle('darkMode');
    sessionStorage.setItem('dark_mode', this.isChecked ? '1' : '0');
  }
}
