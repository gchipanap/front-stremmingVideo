import { Component, OnInit } from '@angular/core';
import { Test_object } from '../test_object'; 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  persona:Test_object = {
    name: "Gabi",
    age: 10
  }

  numero: number = 0;

  decrementar (){
    this.numero --;
  }

  incrementar (){
    this.numero ++;
  }
} 

