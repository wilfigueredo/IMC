import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validator, FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public form : FormGroup;
  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({

      peso: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(10),
        Validators.required
      ])],
      altura: ['',Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(10),
        Validators.required
      ])]
    });
  }

  calcularIMC(){
    let peso = this.form.controls['peso'].value;
    let altura = this.form.controls['altura'].value;
    altura = altura / 100;
    altura = altura * altura;
    let imc = peso/altura;
    let resultado = "";

    if(imc < 17)
      resultado = "Muito abaixo do peso";
    else if(imc > 17 && imc < 18.5)
      resultado = "Abaixo do peso";
    else if(imc > 18.4 && imc < 25)
      resultado = "Peso ideal";
    else if(imc > 25 && imc < 30)
      resultado = "Sobrepeso";  
    else if(imc >= 30 && imc < 35)
      resultado = "Obesidade";   
    else if(imc >= 35 && imc <= 40)
      resultado = "Obesidade grave";
    else if(imc > 40)
      resultado = "Obesidade Morbida";     
    alert(imc.toFixed(2) + "\n" + resultado);
  }

}
