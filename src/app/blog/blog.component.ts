import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FuncsService } from '../_helpers/funcs.service';
import { AuthService } from '../_auth/auth.service';

interface BlogEntries {
	id: number;
	title: string;
	content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

	contentField: string;
	titleField: string;

	entries: BlogEntries[];
	showAddPostButton: boolean = false;

	constructor(public modalService: NgbModal, public funcs: FuncsService, public auth: AuthService) {
		funcs.setDisplayHeaderPadding(true);

		//fill entries array
		auth.getBlogPosts().subscribe((response) => {
			this.entries = response.map((e) => {
				return {
					... e.payload.doc.data()
				} as BlogEntries;
			});
		});

		if(localStorage.getItem("user") != null && JSON.parse(localStorage.getItem("user")) !== null) {
			let email: string = JSON.parse(localStorage.getItem("user")).email;
			if(email === "nick@charliesdesk.com") {
				this.showAddPostButton = true;
			} else {
				this.showAddPostButton = false;
			}
		}

		//this.addPost();
	}

	createNewPost(showaddpost) {
		this.modalService.open(showaddpost, {ariaLabelledBy: 'blog-modal-title', windowClass: 'modal-anim', size: 'lg'});
	}

	addPostClick() {
		let random = Math.floor(Math.random() * 10000) + 1;
		this.addPost({id: random, title: this.titleField, content: this.contentField});
	}

	addPost(input: BlogEntries) {

		//this could allow multiple BlogEntries
		let data: BlogEntries[] = [
			input
		];

		data.forEach((each: BlogEntries) => {
			this.auth.addBlogPost(each).then((res) => {
				console.log(res);
			});
		});
	}

	shouldShowAdminControls(): boolean {
		return this.showAddPostButton && !this.funcs.isMobile();
	}

	ngOnInit() {}

}
