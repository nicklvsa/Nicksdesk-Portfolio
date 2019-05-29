import { Component, OnInit } from '@angular/core';

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

	entries: BlogEntries[];

	constructor(public funcs: FuncsService, public auth: AuthService) {
		funcs.setDisplayHeaderPadding(true);

		//fill entries array
		auth.getBlogPosts().subscribe((response) => {
			this.entries = response.map((e) => {
				return {
					... e.payload.doc.data()
				} as BlogEntries;
			});
		});

		//this.addPost();
	}

	addPost() {

		let data: BlogEntries[] = [
			{id: 3, title: "Some Article", content: `this is some test data and i really like eating pie testing testing testing the data`},
			{id: 4, title: "Some Article 2", content: `this is some test data and i really like eating pie testing testing testing the data`}

		];

		data.forEach((each: BlogEntries) => {
			this.auth.addBlogPost(each).then((res) => {
				console.log(res);
			});
		})
	}

	ngOnInit() {}

}
