import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messagesService.add('HeroService:fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }

  constructor(private messagesService: MessagesService) {}
}
