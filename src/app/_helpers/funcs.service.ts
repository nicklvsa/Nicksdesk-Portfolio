import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class FuncsService {

	private shouldDisplayHeaderPadding: boolean = true;
	private shouldDisplayFooter: boolean = true;
	private useColorSwitcher: boolean = false;

	//starting light color
	private navColorCode: string = "#007bff";

	//starting darker color
	//private navColorCode: string = "#0408B4";

	memeMessage: string = "";

 	constructor(private router: Router, private zone: NgZone) {}

	async delay(time: number) {
		//remove log eventually
		await new Promise(resolve => setTimeout(() => resolve(), time)).then(() => console.log("Pause completed!"));
	}

	listen() {
		if(this.isMobile() !== true) {
			
		} else {
			console.log("secrets not enabled on mobile");
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
		if(comp != null && comp > -1 && this.useColorSwitcher !== false) {
			switch(comp) {
				case 0:
					//should change this to a darker blue, too light
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
		} else {
			//color when color toggler is disabled
			this.navColorCode = "#007bff";
		}
	}

	public currNavBgStyler(): any {
		//need this cuz uh color blind
		//console.log("Current color code: " + this.getRawNavColorCode());
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
