import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    return this.http.post('https://formsubmit.co/e7650767e0d10363bed34a56a6a2fbdb', 
    { name: name, email: email, message: message, _captcha:false })
    .subscribe(
      (response) => console.log("Response:", response), (error) => console.log("Error:", error));
  }
}
