import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {AuthState} from "../../../../share/states/auth/auth.state";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  infoLogin: any;


  constructor(private formBuilder: FormBuilder,
              private authState: AuthState,
              private router: Router) { }

  ngOnInit(): void {
    this.initFormLogin();
  }
  initFormLogin(): void{
    this.infoLogin = this.formBuilder.group({
      username: new FormControl('0985140102', Validators.required),
      password: new FormControl('123456789', Validators.required),
    })
  }

  onSubmit(): void{
    const username = this.infoLogin.get('username').value;
    const password = this.infoLogin.get('password').value;
    this.authState.login(username, password)
      .pipe(first())
      .subscribe(res => {
        console.log(res);
        console.log(res);
        if(res.accessToken && res.refreshToken){
          this.router.navigate(['/admin'])
        }else{
          this.router.navigate(['/'])
        }
      },
        error => {
          console.log(error);
        })
  }
}
