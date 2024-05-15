import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configuration } from '../utils/dynamic-job-conf';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  fields!: any[];
  dynamicForm!: FormGroup;
  submitted: boolean = false

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fields = configuration;
    this.createForm();
  }

  createForm() {
    const formGroupConfig: any = {};

    this.fields.forEach(field => {
      const validators: any[] = [];

      if (field.validations) {
        if (field.validations.required) {
          validators.push(Validators.required);
        }
        if (field.validations.minLength) {
          validators.push(Validators.minLength(field.validations.minLength));
        }
        if (field.validations.maxLength) {
          validators.push(Validators.maxLength(field.validations.maxLength));
        }
        // You can add more validators here based on your validation keys
      }

      formGroupConfig[field.key] = [field.defaultValue, validators];
    });

    this.dynamicForm = this.fb.group(formGroupConfig);
  }

  
  getErrorMessage(fieldKey: string) {
    const field = this.fields.find(f => f.key === fieldKey);
    if (!field) return '';

    const control = this.dynamicForm.get(fieldKey);

    if (control && control.invalid && (control.dirty || control.touched)) {
      if (control.errors) {
        const errorKey = Object.keys(control.errors)[0];
        console.log("The error key is:",errorKey)
        const validation = field.validations[errorKey];
        console.log("The validation is:", validation)
        return validation ? validation : 'Validation error';
      }
    }

    return '';
  }
}
