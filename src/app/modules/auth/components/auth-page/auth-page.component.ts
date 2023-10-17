import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})

export class AuthPageComponent  implements OnInit{

  authFormGroup!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.authFormGroup = this.createFormGroup();
  }


  private createFormGroup(): FormGroup{
    return  new FormGroup({
      login: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }


  public loginFunc(): void {
    console.log(this.authFormGroup.value);
  } 

  public authFormChange(){
    console.log("rr");
  }
}
