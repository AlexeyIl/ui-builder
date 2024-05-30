import { FormControl } from '@angular/forms';
import { defer } from 'rxjs';
import { FieldConfig, Field } from '../types/field-config.type';

export const createField = (config: FieldConfig, groupName?: string): Field => {
  let component;
  switch (config.type) {
    case 'text':
      component = defer(() =>
        import('../UI/input/input.component').then((m) => m.InputComponent)
      );
      break;
    case 'number':
      component = defer(() =>
        import('../UI/input-number/input-number.component').then(
          (m) => m.InputNumberComponent
        )
      );
      break;
  }

  return {
    component,
    props: {
      ...config.props,
      groupName: groupName ?? null,
      controlName: config.key,
    },
    control: new FormControl(),
  };
};
