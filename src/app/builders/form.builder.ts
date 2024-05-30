import { defer } from 'rxjs';
import { FormConfig } from '../types/field-config.type';
import { FormRecord } from '@angular/forms';
import { createField } from './field.builder';

export const createForm = (config: FormConfig, groupName?: string) => {
  const group = new FormRecord({});
  const fields = config.props.fields.map((field) =>
    createField(field, groupName)
  );
  fields.forEach(({ control, props }) =>
    group.addControl(props.controlName, control)
  );
  const comp = defer(() =>
    import('../UI/form/form.component').then((m) => m.FormComponent)
  );

  return {
    group,
    comp,
    props: { ...config.props, fields },
  };
};
