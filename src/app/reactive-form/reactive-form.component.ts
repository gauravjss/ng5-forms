import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];

  ngOnInit() {
   this.signUpForm = new FormGroup(
     {
       'userData': new FormGroup(
         {'username': new FormControl(
             null,
             [Validators.required, this.forbiddenNames.bind(this)]),
           'email': new FormControl(
             null,
             [
               Validators.required,
               Validators.email],
             this.forbiddenEmails)
       }),
       'gender': new FormControl(
         'male'),
       'hobbies': new FormArray(
         [])
     });
    /* this.signUpForm.valueChanges.subscribe(
     (value) => console.log(value)
   );*/
    this.signUpForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
   /* this.signUpForm.setValue({
      'userData': {
        'username': 'kd',
        'email': 'kd@test.com'
      },
      'gender': 'male' ,
      'hobbies': []
    }); */
    this.signUpForm.patchValue({
      'userData': {
        'username': 'kd'
      },
      'gender': 'male'
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).
    push(control);
  }

  forbiddenNames(control: FormControl)
  : {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl)
  : Promise<any> | Observable<any>{
    const promise = new Promise <any>(
      (resolve, reject ) => {
        setTimeout( () => {
          if ( control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
        } else {
            resolve(null);
        }
        }, 1500);
      });
    return promise;
  }

}
