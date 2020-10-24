import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Story } from '../models/Story';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoryService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getNewStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.baseUrl + 'api/Story/stories/new');
  }

  getTopStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.baseUrl + 'api/Story/stories/top');
  }
}
