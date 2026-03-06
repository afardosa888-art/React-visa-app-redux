// Visa Types
export interface VisaState {
  name: string;
  passport: string;
  country: string;
  submitted: boolean;
}

export interface VisaFormData {
  name: string;
  passport: string;
  country: string;
}


export interface PassportFormData {
  name: string;
  passport: string;
  country: string;
  expiryDate: string;
}

export interface PassportState extends PassportFormData {
  submitted: boolean;
}
