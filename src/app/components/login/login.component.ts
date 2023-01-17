import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/accounts")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        // alert('Login Succesful');
        sessionStorage.setItem('email', this.loginForm.value.email)
        this.loginForm.reset()
    
      sessionStorage.setItem('loggedIn', "1")
      
      this.router.navigate([""])
      }else{
        alert("User not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }
}
