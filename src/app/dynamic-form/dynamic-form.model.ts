export interface IFieldConfig {
    order: number;
    key: string;
    label: string;
    controlType: string;
    type: string;
    component?: string;
    validations?: IValidation;
    defaultValue?: any;
    placeholder?: string;
    isOptionsRequired?: boolean;
    options?: any;
    config?: any;
    is_disabled?: boolean;
    hideLabel?: boolean;
    inputMode?: string;
  }
  
  // Options to be provided for the field
  export interface IOption {
    pid: number;
    name: string;
    icon?: string;
    value?: string;
  }
  
  // Validation Object
  export interface IValidation {
    required?: boolean;
    requiredMsg?: string;
  
    pattern?: RegExp;
    negationPattern?: RegExp;
    patternMsg?: string;
  
    minLength?: number;
    minLengthMsg?: string;
  
    maxLength?: number;
    maxLengthMsg?: string;
  
    email?: boolean;
    emailMsg?: string;
  
    min?: number;
    minMsg?: string;
  
    max?: number;
    maxMsg?: string;
  
    minDate?: Date | string | moment.Moment;
    maxDate?: Date | string | moment.Moment;

    requiredTrue?: boolean;
    requiredTrueMsg?: string;

    format?: Array<string>;
    sizeLimit?: number;
  }