import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClientService {

	constructor(private http: Http) {}
  
	createAuthorizationHeader(headers: Headers) {
		//headers.append('Authorization', 'Bearer 56207777f045b10f87c8fbe4f718cf54');
		//headers.append('Content-Type', 'text/plain charset=UTF-8');
		headers.append('Content-Type', 'multipart/form-data charset=UTF-8');
	}
  
	get(url) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		// console.log(headers);
		return this.http.get(url, {
			headers: headers
		});
	}
  
	post(url, data) {
		let headers = new Headers();
		//this.createAuthorizationHeader(headers);
		return this.http.post(url, data, {
			headers: headers
		});
	}

}
