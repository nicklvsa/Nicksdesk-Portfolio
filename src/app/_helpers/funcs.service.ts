import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class FuncsService {

	private shouldDisplayHeaderPadding: boolean = true;
	private shouldDisplayFooter: boolean = true;

 	constructor() {}

	async delay(time: number) {
		//remove log eventually
		await new Promise(resolve => setTimeout(() => resolve(), time)).then(() => console.log("pause finished!"));
	}

	setDisplayFooter(should: boolean) {
		this.shouldDisplayFooter = should;
	}

	getDisplayFooter(): boolean {
		return this.shouldDisplayFooter;
	}

	setDisplayHeaderPadding(should: boolean) {
		this.shouldDisplayHeaderPadding = should;
	}

	getDisplayHeaderPadding(): boolean {
		return this.shouldDisplayHeaderPadding;
	}

	//fix localStorage on mobile
	/*getLocalStorageItemMobile(): string {

		if(this.isMobile()) {

		}

		return null;
	}*/

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
