/*
* File: app.component.ts
* Author: Bán Cintia
* Copyright: 2022, Bán Cintia
* Group: Szoft II/N
* Date: 2022.01-13
* Github: https://github.com/bncinti/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testtomegindex';

  bmiVisible = false;

  bmiForm !: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.bmiForm = this.formBuilder.group({
      weight: [''],
      height: [''],
	    bmi :['']
      
    });
  }

  

  onClickSzamit(){
    let weight=Number(this.bmiForm.value.weight) 
    let height =Number(this.bmiForm.value.height) 
    let bmi= weight/Math.pow(height/100,2);
  console.log(bmi)
  this.bmiVisible = true;
  }
}

