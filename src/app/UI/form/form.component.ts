import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Field } from '../../types/field-config.type';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgComponentOutlet, AsyncPipe],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class FormComponent {
  fields = input<Field[]>();
  title = input<string>();
}
