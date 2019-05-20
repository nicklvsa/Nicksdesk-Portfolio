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
	isNotMobile() {
		let nav: Navigator = new Navigator();
		return !(
			nav.userAgent.match(/Android/i)
 			&& nav.userAgent.match(/webOS/i)
 			&& nav.userAgent.match(/iPhone/i)
 			&& nav.userAgent.match(/iPad/i)
 			&& nav.userAgent.match(/iPod/i)
 			&& nav.userAgent.match(/BlackBerry/i)
 			&& nav.userAgent.match(/Windows Phone/i)
 		);
	}
}
