import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncsService {
	
 	constructor() {}

	async delay(time: number) {
		await new Promise(resolve => setTimeout(() => resolve(), time)).then(() => console.log("pause finished!"));
	}
}
