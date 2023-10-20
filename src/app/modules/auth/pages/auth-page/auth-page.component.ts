import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  providers: [AuthService]
})

export class AuthPageComponent  implements OnInit{


  public displaySingInForm: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.displaySingInForm = data['form'] == 'signIn';
    })
  }


  public signInBtnClick(event: any){
    this.authService.saveInputUsersDates(event);
    this.router.navigate(['home']);
  }


  public signUpBtnClick(event: any){
    console.log(event, "reg");
  }

}
