import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CodeBreakerService } from '../services/code-breaker.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private router: Router, private apiService: CodeBreakerService) { }

  ngOnInit() {
  }

  onNewGame() {
    this.apiService.postGuess("").subscribe(data => {
      console.log(data);
    });
    this.router.navigateByUrl('/guess');
  }

}
