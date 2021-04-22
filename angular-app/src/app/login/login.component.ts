import { Router } from '@angular/router';
import { AuthService } from './../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'admin';
  password: string = 'admin';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (token) => {
        this.authService.setJwt(token);
        this.router.navigate(['/home']);
      },
      (err) => alert('Auth failed!!!')
    );
  }
}
