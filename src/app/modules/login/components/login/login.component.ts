import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public year: number = new Date().getFullYear();
  public form: FormGroup = new FormGroup ({
    user: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private formBuilder: FormBuilder,) {

   }

  ngOnInit(): void {

    this.form.get("user")?.valueChanges?.subscribe(data => {});

    this.year = new Date().getFullYear();
  }

}
