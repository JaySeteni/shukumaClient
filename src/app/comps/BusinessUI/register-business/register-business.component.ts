import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrl: './register-business.component.css'
})
export class RegisterBusinessComponent {
  
  signUpBusinesses: any[] = [];
  signUpObj: any = { 
    businessName: '',
    email: '',
    password: '',
    phoneNumber: '',
  };
  spinnerHidden = true;
  constructor() { }
  
  onSignUp() {
    setTimeout(() => {
      const toast = document.createElement('div');
      toast.classList.add('w-full', 'flex', 'items-center', 'max-w-sm', 'py-5', 'px-6', 'text-gray-600', 'bg-white', 'rounded-xl', 'border', 'border-gray-200', 'shadow-sm', 'mb-4', 'fixed', 'bottom-10', 'right-10');
      toast.setAttribute('role', 'alert');
      toast.innerHTML = `
        <p class="text-base font-medium">Business registered successfully!</p>
        <div class="ml-auto flex items-center space-x-3">
          <button type="button" class="inline-flex flex-shrink-0 justify-center items-center text-gray-400 transition-all duration-150" data-dismiss="alert">
            <span class="sr-only">Close</span>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 17L7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      `;

      document.body.appendChild(toast);

      this.signUpBusinesses.push({ 
        businessName: this.signUpObj.businessName, 
        email: this.signUpObj.email, 
        password: this.signUpObj.password ,
        phoneNumber: this.signUpObj.phoneNumber
      });

      this.signUpObj = { 
        businessName: '', 
        email: '', 
        password: '',
        phoneNumber: '' 
      };

      // Hide the spinner after the registration logic is completed
      this.spinnerHidden = true;
    }, 2000); // Replace 2000 with the actual time it takes to complete the registration logic
  }
}