import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { SaucerService } from './saucer.service';
import { RestaurantService} from '../restaurants/restaurant.service';

@Component({
  selector: 'app-saucers',
  templateUrl: './saucers.component.html',
  styleUrls: ['./saucers.component.css'],
  providers: [SaucerService, RestaurantService]
})
export class SaucersComponent implements OnInit, OnDestroy {

	restaurantId: string = '';
	private subscription: Subscription;

	restaurant = {};
	saucers = [];

  constructor(
  		private route: ActivatedRoute,
  		private saucerService: SaucerService,
  		private restaurantService: RestaurantService
  	) { }

  ngOnInit() {


  		this.subscription = this.route.params.subscribe(
  			(params: any) => {
  				console.log('Params', params);
  				this.restaurantId = params.id;

  				this.saucerService.getSaucers(this.restaurantId)
		  			.then(response => {
		  				this.saucers = response;
		  			});

		  		this.restaurantService.getRestaurant(this.restaurantId)
		  			.then(response => {
		  				this.restaurant = response;
		  			} );
  			}
  		);

  		
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
