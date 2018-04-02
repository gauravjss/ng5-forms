import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  @ViewChild('fg') signupForm: NgForm;
  defaultSubscription = 'Advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.user.password = this.signupForm.value.password;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;

  }

}
