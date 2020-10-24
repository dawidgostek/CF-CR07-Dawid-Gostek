import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  sendForm;

  constructor(private formBuilder: FormBuilder) {
    this.sendForm = this.formBuilder.group({
      text: '',
      email: ''
    });
   }

  ngOnInit(): void {
  }
  onSubmit(customerMessage) {
    console.warn('Your message has been submitted', customerMessage);
    this.sendForm.reset();
    
  }
}
