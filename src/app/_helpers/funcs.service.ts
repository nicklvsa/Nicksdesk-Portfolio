import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncsService {

 	constructor() {}

	async delay(time: number) {
		await new Promise(resolve => setTimeout(() => resolve(), time)).then(() => console.log("pause finished!"));
	}

	//fix mobile check
	isNotMobile(): boolean {
		return (
			!navigator.userAgent.match(/Android/i)
 			&& !navigator.userAgent.match(/webOS/i)
 			&& !navigator.userAgent.match(/iPhone/i)
 			&& !navigator.userAgent.match(/iPad/i)
 			&& !navigator.userAgent.match(/iPod/i)
 			&& !navigator.userAgent.match(/BlackBerry/i)
 			&& !navigator.userAgent.match(/Windows Phone/i)
 		);
	}
}
