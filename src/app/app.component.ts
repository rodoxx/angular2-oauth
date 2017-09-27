import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  email = '';
  password = '';

  oauth2_response = '';

  constructor(private http: Http) {}

  submitRegister(): void {
		console.log(this.email + this.password);
   
    var OAuthBaseUrl = "http://127.0.0.1:90/oauth/access_token";
		var OAuthCliendId = "GXvOWazQ3lA6YSaFji";
		var OAuthClientSecret = "GXvOWazQ3lA.6/YSaFji";

		var username = this.email;
		var password = this.password;
    var data = {
			grant_type: 'password',
			client_id: 'GXvOWazQ3lA6YSaFji', 
			client_secret: 'GXvOWazQ3lA.6/YSaFji',
      username: this.email,
      password: this.password
		}
		
		this.http.post(OAuthBaseUrl, data)
            .subscribe(data => {
                console.log(data);
                this.oauth2_response = data.text();
            }, error => {
                console.log('Not created');
                console.log(error);
            });
	}
}
