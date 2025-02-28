import { Component } from '@angular/core';
import { ContactFormDetails } from 'src/app/core/model/contactForm';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  contacts: ContactFormDetails[] = [];
  isLoading = true;
  showPopup = false;
  contactToDelete: string | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
      this.isLoading = false;
    });
  }

  openPopup(contactId: string) {
    this.showPopup = true;
    this.contactToDelete = contactId;
  }

  closePopup() {
    this.showPopup = false;
    this.contactToDelete = null;
  }

  confirmDelete() {
    if (this.contactToDelete) {
      this.contactService.deleteContact(this.contactToDelete).subscribe(() => {
        this.contacts = this.contacts.filter(
          (contact) => contact.id !== this.contactToDelete
        );
        this.closePopup();
      });
    }
  }
}
