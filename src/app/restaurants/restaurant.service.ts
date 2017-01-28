import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class RestaurantService {
	apiUrl = environment.API_URL+'restaurants/';
	constructor(private http: Http) {}
	getRestaurants() {
		return this.http.get(this.apiUrl)
			.map((response: Response) => response.json())
      		.toPromise();
	}

	getRestaurant(id: string) {
		return this.http.get(this.apiUrl + id)
			.map((response: Response) => response.json())
      		.toPromise();
	}
}






