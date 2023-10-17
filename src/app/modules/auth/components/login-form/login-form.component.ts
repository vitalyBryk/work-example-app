import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() signIn = new EventEmitter();

  public signInFormGroup!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.signInFormGroup = this.createFormGroup();
  }


  private createFormGroup(): FormGroup{
    return  new FormGroup({
      login: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }


  public onSubmit(): void {
    this.signIn.emit(this.signInFormGroup.value)
  } 

  public signInFormChange(){}
  
}
