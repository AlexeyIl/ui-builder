import { FormControl } from '@angular/forms';
import { InputNumberComponent } from '../UI/input-number/input-number.component';
import { InputComponent } from '../UI/input/input.component';
import { Observable } from 'rxjs';

export type FieldConfig = {
  key: string;
  type: 'text' | 'number';
  props: Record<string, unknown>;
};

export type FormConfig = {
  template: string;
  props: {
    fields: FieldConfig[];
    title: string;
  };
};

export type FieldsTypes =
  | Observable<typeof InputComponent>
  | Observable<typeof InputNumberComponent>;

export type Field = {
  control: FormControl;
  props: Record<string, unknown> & {
    controlName: string;
    groupName: string | null;
  };
  component: FieldsTypes;
};
