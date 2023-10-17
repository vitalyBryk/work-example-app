import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})

export class AuthPageComponent  implements OnInit{


  public displaySingInForm: boolean = true;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.displaySingInForm = data['form'] == 'signIn';
    })
  }


  public signInBtnClick(event: any){
    console.log(event);
    
  }

  public signUpBtnClick(event: any){
    console.log(event, "reg");
  }

}
