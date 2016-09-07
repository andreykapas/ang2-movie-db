/**
 * Created by andrey on 3.9.16.
 */
export class Movie{
  constructor(
    public id: number = 0,
    public title: string = '',
    public poster: string = '',
    public overview: string = '',
    public budget: number = 0,
    public release_date: Date = new Date(),
    public vote_average: string = '') {}
}
