import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  input,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class InputNumberComponent {
  label = input<string>();

  controlName = input<string>();

  groupName = input<string>();

  control?: FormControl;

  fgd = inject(FormGroupDirective);

  cdr = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      if (this.groupName() && this.controlName() && !this.control) {
        this.control = (
          this.fgd.form.get(this.groupName() as string) as FormGroup
        ).get(this.controlName() as string) as FormControl;
        this.cdr.detectChanges();
      }
    });
  }
}
