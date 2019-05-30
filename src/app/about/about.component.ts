import { Component, OnInit, Input, Directive, HostListener, HostBinding} from '@angular/core';
import { FuncsService } from '../_helpers/funcs.service';

declare var particlesJS: any;

/*class Positioner {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

@Directive({
	selector: '[ndesk-drag]'
})*/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {

	private moving: boolean = false;
	private origin = null;

	@Input() logo_dir: string = "assets/aboutme.png";

	/*@Input('handle') handle: HTMLElement; 

    @HostBinding('style.transform') transform: string = 'translate3d(0,0,0)'; 

    @HostListener('document:mousemove', [$event]) mousemove($event: MouseEvent) {
       event.preventDefault();
       this.moveTo($event.clientX, $event.clientY);
   	}

    @HostListener('document:mouseup') mouseup() { 
        this.moving = false;
   	}

   	@HostListener('mousedown',['$event']) onMouseDown(event: MouseEvent) {
    if (event.button == 2 || (this.handle !== undefined && event.target !== this.handle)) {
     	return; 
    } else {
        this.moving = true;
        this.origin = this.getPosition(event.clientX, event.clientY);
   	}*/

	constructor(private funcs: FuncsService/*, private ref: ElementRef, private zone: NgZone, private renderer: Renderer2*/) {
		//implement better way of showing and hiding padding
		funcs.setDisplayHeaderPadding(false);
  		funcs.setDisplayFooter(true);  		
	}

	meme() {
		this.funcs.listen();
	}

	ngOnInit() {
		particlesJS.load('particles-js', 'assets/about_particles.json', () => {
  			console.log("particles loaded!");
		});
	}

}
