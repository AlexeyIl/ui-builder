import { AsyncPipe, JsonPipe, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { addressFormConfig, userFormConfig } from './mocks/test';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { createForm } from './builders/form.builder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  addressForm = createForm(addressFormConfig, 'address');
  userForm = createForm(userFormConfig, 'user');

  form = new FormGroup({
    address: this.addressForm.group,
    user: this.userForm.group,
  });
}
