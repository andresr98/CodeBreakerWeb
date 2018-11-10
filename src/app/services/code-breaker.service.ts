
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://apicodebreaker.herokuapp.com/';

@Injectable()
export class CodeBreakerService {

  constructor(private http: HttpClient) { }

  getGuess(code: string) {
    return this.http.get<any>(API + 'guess?number=' + code);
  }

  postGuess(secret: string) {
    return this.http.post<any>(API + 'guess/', {"secret": secret});
  }
}
