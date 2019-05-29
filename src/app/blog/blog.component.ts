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

	private entries: BlogEntries[];

	constructor(private funcs: FuncsService, private auth: AuthService) {
		funcs.setDisplayHeaderPadding(true);

		//fill entries array
		auth.getBlogPosts().subscribe((response) => {
			this.entries = response.map((e) => {
				return {
					... e.payload.doc.data()
				} as BlogEntries;
			});
		});
	}

	ngOnInit() {}

}
