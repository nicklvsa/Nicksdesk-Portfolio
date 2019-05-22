import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FuncsService {

	private shouldDisplayHeaderPadding: boolean = true;

 	constructor() {}

	async delay(time: number) {
		await new Promise(resolve => setTimeout(() => resolve(), time)).then(() => console.log("pause finished!"));
	}

	setDisplayHeaderPadding(should: boolean) {
		this.shouldDisplayHeaderPadding = should;
	}

	getDisplayHeaderPadding(): boolean {
		return this.shouldDisplayHeaderPadding;
	}

	//fix mobile check
	isMobile(): boolean {
 		return (
 			/Android/i.test(navigator.userAgent)
 			|| /webOS/i.test(navigator.userAgent)
 			|| /iPhone/i.test(navigator.userAgent)
 			|| /iPod/i.test(navigator.userAgent)
 			|| /iPad/i.test(navigator.userAgent)
 			|| /BlackBerry/i.test(navigator.userAgent)
 			|| /Windows Phone/i.test(navigator.userAgent)
 		);
	}
}
