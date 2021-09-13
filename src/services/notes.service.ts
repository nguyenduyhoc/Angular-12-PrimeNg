import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'src/models/notes.models';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private REST_API_SERVER = 'https://610b9b962b6add0017cb398d.mockapi.io';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getNotes(): Observable<Note[]> {
    const url = `${this.REST_API_SERVER}/notes`;
    return this.httpClient.get<Note[]>(url, this.httpOptions);
  }

  public postNotes(payLoad: Note): Observable<Note> {
    const url = `${this.REST_API_SERVER}/notes`;
    return this.httpClient.post<Note>(url, payLoad, this.httpOptions);
  }
}
