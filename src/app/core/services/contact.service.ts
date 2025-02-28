import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactFormDetails } from '../model/contactForm';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'https://kwamu-bb31e-default-rtdb.firebaseio.com/contacts';

  constructor(private http: HttpClient) {}

  addContact(contact: ContactFormDetails): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`${this.baseUrl}.json`, contact);
  }

  getContacts(): Observable<ContactFormDetails[]> {
    return this.http.get<{ [key: string]: ContactFormDetails }>(`${this.baseUrl}.json`).pipe(
      map(data => {
        const contacts: ContactFormDetails[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            contacts.push({ ...data[key], id: key });
          }
        }
        return contacts;
      })
    );
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}.json`);
  }
}
