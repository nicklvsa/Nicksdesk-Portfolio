import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

import { RxSpeechRecognitionService, resultList } from '@kamiazya/ngx-speech-recognition';

@Injectable({
	providedIn: 'root'
})

export class FuncsService {

	private shouldDisplayHeaderPadding: boolean = true;
	private shouldDisplayFooter: boolean = true;
	private navColorCode: string = "#007bff";

	memeMessage: string = "";

	//need ngzone to access router from a non-component
	//the speech definition is giving weird issues on mobile cuz apis don't exist

	//need to figure out how to swap out constructors

 	constructor(private router: Router, private zone: NgZone) {
 		/*
			when declaring a new speech object above, mobile devices error out and will not display
			the website as it uses apis that are not supported on mobile... the below code does not 
			do what I was intending on making it do so I have to figure a correct fix.
			-- MOBILE PHONE WILL NOT DISPLAY THE SITE FOR NOW --
 		*/
 	}

	async delay(time: number) {
		//remove log eventually
		await new Promise(resolve => setTimeout(() => resolve(), time)).then(() => console.log("pause finished!"));
	}

	listen() {
		let speech: RxSpeechRecognitionService = new RxSpeechRecognitionService();
		if(!this.isMobile()) {
			this.speech.listen().pipe(resultList).subscribe((list: SpeechRecognitionResultList) => {
				this.memeMessage = list.item(0).item(0).transcript;
				console.log(this.memeMessage);
				if(this.memeMessage.toLowerCase().indexOf("make me silly") > -1) {
					this.delay(2000).then(any => {
						this.zone.run(() => {
							this.router.navigate(['/home'], {queryParams: {'secret': 1}});
						});
					});
				}
			});
		} else {
			console.log("cannot load speech to text on mobile!");
		}
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
	public cycleNavColor(comp: number) {
		if(comp != null && comp > -1) {
			switch(comp) {
				case 0:
					this.navColorCode = "#007bff";
				break;
				case 1:
					this.navColorCode = "#0408B4";
				break;
				case 2:
					this.navColorCode = "#00038B";
				break;
				case 3:
					this.navColorCode = "#000378";
				break;
				case 4:
					this.navColorCode = "#000368";
				break;
				case 5:
					this.navColorCode = "#000250";
				break;
				case 6:
					this.navColorCode = "#01023D";
				break;
				case 7:
					this.navColorCode = "#000135";
				break;
				default:
					this.navColorCode = "#007bff";
				break;
			}
		}
	}

	public currNavBgStyler(): any {
		//need this cuz uh color blind
		console.log("Current color code: " + this.getRawNavColorCode());
		return {
			'background-color': (this.navColorCode != null) ? this.navColorCode : "#007bff"
		};
	}

	public getRawNavColorCode(): string {
		return (this.navColorCode != null) ? this.navColorCode : "_";
	}

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
