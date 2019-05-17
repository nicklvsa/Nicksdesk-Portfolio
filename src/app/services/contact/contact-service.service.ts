import { Injectable } from '@angular/core';

import { ConfigServiceService } from '../config/config-service.service';

import { HttpClient } from '@angular/common/http';
import { Observable, pipe, throwError, fromEvent, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ContactData {
	subject: string;
	email: string;
	message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactServiceService {

  constructor(private http: HttpClient) {}

  sendContactForm(data: ContactData): Observable<ContactData> {
  	//prone to change
  	let contactRequest: string = "/api/api.php?type=contact";
  	let err = new ConfigServiceService();
  	return this.http.post<ContactData>(contactRequest, data).pipe(catchError(err.handleError));
  }
}
