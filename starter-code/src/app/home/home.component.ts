import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTheMovies: Array<any> = [];

  constructor(private myService: MovieService) { }

  ngOnInit() {
    this.allTheMovies = this.myService.getMovies();
  }

};
