import { Component, OnInit } from '@angular/core';

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

	constructor() {
		//fetch entries
		this.entries = [
			{id: 1, title: "test", content: "some content"},
			{id: 2, title: "two", content: "second content"}
		];
	}

	ngOnInit() {}

}
