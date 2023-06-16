import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string
  email = 'shyam@demo.com'
  password = '123'

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  login() {
    if (this.email === 'shyam@demo.com' && this.password === '123') {
      this.error = undefined;
      this.authService.login(this.email)
      this.router.navigate(['/'])
    } else {
      this.error = "Invalid Credentials"
    }
  }

}
