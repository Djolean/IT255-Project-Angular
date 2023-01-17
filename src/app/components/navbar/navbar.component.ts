import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn:string | null = ""

  constructor(private router: Router) {
   this.loggedIn = sessionStorage.getItem("loggedIn")
  //  if(this.loggedIn === "1"){
  //   console.log("1111")
  //  }else if(this.loggedIn === "0"){
  //   console.log("2222")
  //  }else {
  //   console.log("idk")
  //  }

  }

  ngOnInit(): void {
    if(sessionStorage.getItem("loggedIn") == null){
      this.router.navigateByUrl("/login")
    }
  }
  logout(){
    sessionStorage.setItem("loggedIn", "0")
    this.router.navigateByUrl("/login")
  }
}
