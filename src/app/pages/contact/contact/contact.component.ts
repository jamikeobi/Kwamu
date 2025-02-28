import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormDetails } from 'src/app/core/model/contactForm';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;
  isSubmitting = false;
  isFormValid: boolean = false;
  id: any;
  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['']
    });
  }

   generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

  onFormSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const newContact = new ContactFormDetails(
      this.generateId(),
      this.contactForm.value.fullName,
      this.contactForm.value.email,
      this.contactForm.value.subject,
      this.contactForm.value.message,
      new Date().toISOString()
    );

    this.contactService.addContact(newContact).subscribe(
      (response) => {
        // console.log('Contact added successfully: ' , newContact);
        console.log('Form Response: ', response);
        
        this.contactForm.reset();
        this.isSubmitting = true;
        this.isFormValid = true;
        setTimeout(() => {
          this.isFormValid = false;
        }, 3000);
      },
      (error) => {
        // console.log('Failed to send message. Please try again: ', error);
        
        // alert('Failed to send message. Please try again.');
        this.isSubmitting = false;
      }
    );
  }
}
