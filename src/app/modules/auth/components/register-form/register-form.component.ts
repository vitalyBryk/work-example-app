import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  
  @Output() signUp = new EventEmitter();

  public signUpFormGroup!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.signUpFormGroup = this.createFormGroup();
  }


  private createFormGroup(): FormGroup{
    return  new FormGroup({
      login: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }


  public onSubmit(): void {
    this.signUp.emit(this.signUpFormGroup.value)
  } 

  public signUpFormChange(){}
  
}
