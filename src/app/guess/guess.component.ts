import { Component, OnInit } from '@angular/core';

import { CodeBreakerService } from '../services/code-breaker.service';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  code = "";
  message: string;
  isResultReady = false;
  result: string;

  constructor(private service: CodeBreakerService) { }

  ngOnInit() {
  }

  onGuess() {
    this.service.getGuess(this.code)
      .subscribe(data => {
        this.result = data.result;
        this.message = data.message;
        this.isResultReady = true; 
    });    
  }

}
