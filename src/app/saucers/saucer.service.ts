import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class SaucerService {
	apiUrl = environment.API_URL+'restaurants/';
	constructor(private http: Http) {}
	getSaucers(id: string) {
		return this.http.get(this.apiUrl+id+'/saucers')
			.map((response: Response) => response.json())
      		.toPromise();
	}

	getSaucer(id: string) {
		return this.http.get('https://stark-river-41252.herokuapp.com/api/saucers/'+id)
			.map((response: Response) => response.json())
      		.toPromise();
	}
}






