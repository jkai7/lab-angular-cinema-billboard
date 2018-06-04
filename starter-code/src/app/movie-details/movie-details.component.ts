import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // for params
import { MovieService } from '../services/movie.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  theMovie: any = {};

  constructor(private route: ActivatedRoute,
  private myService: MovieService
 ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        const theId = this.theMovie = Number(params['id']);
        this.theMovie = this.myService.getMovie(theId)
        console.log("the movie: ", this.theMovie);
        console.log("id is: ", theId)
    });
  }
}


