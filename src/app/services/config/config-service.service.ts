import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor() { }

  public handleError(error: HttpErrorResponse) {
  	if(error.error instanceof ErrorEvent) {
  		console.error("Error occurred: ", error.error.message);
  	} else {
  		console.error(`Response code: ${error.status}` + `Error body: ${error.error}`);
  	}
  	return throwError('An issue occurred while running! Please try again later.');
  }
}
