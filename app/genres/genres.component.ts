/**
 * Created by andrey on 6.9.16.
 */
import {Component, OnInit}      from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription}           from 'rxjs/Subscription';

import {Genre}                  from './genre';
import {GenresService}          from './genres.service';

@Component({
  selector: 'genres-list',
  templateUrl: 'app/genres/genres.component.html',
  providers: [GenresService]
})
export class GenresComponent implements OnInit {
  public status:{isopen: boolean} = {isopen: false};
  genres: Genre[] = [];

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private genresService: GenresService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.getGenresList();
      });
  }

  getGenresList() {
    this.genresService.getGenresList()
      .subscribe(genresList => {
        let tempArr: any[] = [];
        for (let key in genresList) {
          tempArr.push(genresList[key]);
        }
        this.genres = tempArr[0];
        //console.log(this.genres);
      });
  }

  isSelected(genre: Genre) {
    return genre.id === this.selectedId;
  }

  onSelect(genre: Genre) {
    this.router.navigate(['/genre', genre.id]);
  }
}
