import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-td-form2',
  templateUrl: './td-form2.component.html',
  styleUrls: ['./td-form2.component.css']
})
export class TdForm2Component {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username : '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Need to set the value of whole form
    /* this.signupForm.setValue({
       userData: {
         username: suggestedName,
         email: ''
       },
       secret: 'pet',
       questionAnswer: 'Testing',
       gender: 'male'
     });*/
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  /* onSubmit(form: NgForm) {
     console.log(form);
   }*/

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

}
