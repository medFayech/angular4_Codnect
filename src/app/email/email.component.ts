import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { debounceTime, map, take } from 'rxjs/operators';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService, private afs: AngularFirestore, private fb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      login: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]]
    });
 
  }

  get login(){
    return this.loginForm.get('login');
  }

  get password(){
    return this.loginForm.get('password');
  }

  signUp(){
    return this.authService.login(this.login.value, this.password.value);
  }

}


