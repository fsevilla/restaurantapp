import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { SaucerService } from '../saucers/saucer.service';
import { CommentService } from './comment.service';
import { RestaurantService } from '../restaurants/restaurant.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [SaucerService, CommentService, RestaurantService]
})
export class CommentsComponent implements OnInit, OnDestroy {

	restaurantId: string;
	saucerId: string;
	private subscription: Subscription;
	saucer = {};
  comments = [];
  restaurant = {};
  data = {};

  commentSuccess: Boolean;
  commentError: Boolean;

  constructor(
  		private route: ActivatedRoute,
  		private saucerService: SaucerService,
      private commentService: CommentService,
      private restaurantService: RestaurantService
  	) { }

  ngOnInit() {
  		this.subscription = this.route.params.subscribe(
  			(params: any) => {
  				this.restaurantId = params.restaurantId;
  				this.saucerId = params.saucerId;

          this.restaurantService.getRestaurant(this.restaurantId)
            .then(response => this.restaurant = response);

  				this.saucerService.getSaucer(this.saucerId)
  					.then(response => this.saucer = response );

           this.commentService.getComments(this.saucerId)
             .then(response => this.comments = response );
  				
  			}
  		);
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  sendComment(){

    this.commentService.addComment(this.saucerId, this.data)
      .then( response => {
          this.comments.push(response);
          this.commentSuccess = true;
          this.commentError = false;
          this.data = {};
      })
      .catch( response => {
          this.commentError = true;
          this.commentSuccess = false;
      });
  }

}
