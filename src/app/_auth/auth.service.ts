import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from 'firebase';

export interface ContactData {
  subject: string;
  email: string;
  message: string;
}

export interface EntryData {
	id: number;
	title: string;
	content: string;
}

@Injectable({
 	providedIn: 'root'
})

export class AuthService {

	//check user token validity

	/* TODO: possibly add more sign in methods */

	user: User;

	constructor(public afAuth: AngularFireAuth, private store: AngularFirestore, public router: Router) { 
		this.afAuth.authState.subscribe(user => {
			if(user) {
				this.user = user;
				localStorage.setItem('user', JSON.stringify(this.user));
			} else {
				localStorage.setItem('user', null);
			}
		})
	}

	async login(email: string, password: string) {
		try {
			await this.afAuth.auth.signInWithEmailAndPassword(email, password);
			this.router.navigate(['/dashboard']);
		} catch(e) {
			console.log(e.message);
		}
	}

	async loginWithGoogle() {
		try {
			await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
			this.router.navigate(['/dashboard']);
		} catch(e) {
			console.log(e.message);
		}
	}

	async loginWithTwitter() {
		try {
			await this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
			this.router.navigate(['/dashboard']);
		} catch(e) {
			console.log(e.message);
		}
	}

	//possibly implement in the future with other oauth providers
	/*async loginWithGithub() {
		try {
			await this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
			this.router.navigate(['/dashboard']);
		} catch(e) {
			console.log(e.message);
		}
	}*/

	async logout() {
		await this.afAuth.auth.signOut();
		localStorage.removeItem('user');
		this.router.navigate(['/login']);
	}

	/* possible async so await can be used */ 
	addContact(data: ContactData) {
		return new Promise<any>((response, reject) => {
			this.store.collection("contact").add(data).then(res => {
				console.log(res);
				return response();
			}).catch((e) => {
				console.log(e);
			});
		});
	}

	addBlogPost(data: EntryData) {
		return new Promise<any>((response, reject) => {
			this.store.collection('blog-posts').add(data).then(res => {
				return response();
			}).catch((e) => {
				console.log(e)
			});
		});
	}

	getBlogPosts() {
		return this.store.collection("blog-posts").snapshotChanges();
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user !== null;
	}

	get getUserRecognizableIdentifier(): string {
		//really long string to find a value to indentify logged in user
		//prob should change this to something more normal
		return (JSON.parse(localStorage.getItem("user")) !== null && JSON.parse(localStorage.getItem("user")).email !== null && JSON.parse(localStorage.getItem("user")).email !== "") ? JSON.parse(localStorage.getItem("user")).email : JSON.parse(localStorage.getItem("user")).displayName;
	}

}
