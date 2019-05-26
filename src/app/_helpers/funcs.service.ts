import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

import { RxSpeechRecognitionService, resultList } from '@kamiazya/ngx-speech-recognition';

@Injectable({
	providedIn: 'root'
})

export class FuncsService {

	private shouldDisplayHeaderPadding: boolean = true;
	private shouldDisplayFooter: boolean = true;

	memeMessage: string = "";

	//need ngzone to access router from a non-component
 	constructor(public speech: RxSpeechRecognitionService, private router: Router, private zone: NgZone) {}

	async delay(time: number) {
		//remove log eventually
		await new Promise(resolve => setTimeout(() => resolve(), time)).then(() => console.log("pause finished!"));
	}

	listen() {
		this.speech.listen().pipe(resultList).subscribe((list: SpeechRecognitionResultList) => {
			this.memeMessage = list.item(0).item(0).transcript;
			console.log(this.memeMessage);
			if(this.memeMessage.toLowerCase().indexOf("i am silly") > -1) {
				console.log("SECRET");
				this.delay(2000).then(any => {
					this.zone.run(() => {
						this.router.navigate(['/home'], {queryParams: {'secret': 1}});
					});
				});
			}
		});
	}

	//add setter
	setDisplayFooter(should: boolean) {
		this.shouldDisplayFooter = should;
	}

	getDisplayFooter(): boolean {
		return this.shouldDisplayFooter;
	}

	//add setter
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
