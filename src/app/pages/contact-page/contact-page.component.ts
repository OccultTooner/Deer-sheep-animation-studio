import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  name = new UntypedFormControl('',Validators.required);
  email = new UntypedFormControl('',[Validators.required, Validators.email]);
  message = new UntypedFormControl('',Validators.required);


  
  constructor(private emailHttp: EmailServiceService) { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.name.valid&&this.email.valid&&this.message.valid){
      this.emailHttp.sendEmail(this.name.value, this.email.value,this.message.value);
      this.clearForm();
    }else{
      console.log('error');
    }

 
  }
  clearForm(){
    this.name.setValue('');
    this.email.setValue('');
    this.message.setValue('');
  }

}
