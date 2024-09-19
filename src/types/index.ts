import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

export interface InputProps {
  label: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  inputMode?: any;
  value: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectProps {
  options: string[];
  label: string;
  placeholder: string;
  isRequired: boolean;
  value?: string;
  name: string;
  onChange: (value: string, name: string) => void;
}

export interface IFunctionSelector {
  heading: string;
  desc: string;
  sectionAOptions: string[];
  sectionBOptions: string[];
  noOfLines?: number;
  isSmall?: boolean;
  setFormData: setStateAction<Record<string, any>[]>;
  formData: Record<string, any>;
  handleSelect: (
    selectedOption: any,
    name: string,
    setFormData: setStateAction<any>,
    formType: Record<string, any>) => void;
  name: string;
}

export interface IGroupListing {
  groups: Record<string, string>[];
  sectionAOptions: string[];
  sectionBOptions: string[];
  sectionAPlaceholder: string;
  sectionBPlaceholder: string;
  fieldALabel: string;
  fieldBLabel: string;
  removeGroup: (id: string) => void;
  handleSelection: (value: string, id: string, fieldName: string) => void;
}

export interface IFormControl {
  label: string;
  isRequired: boolean;
}

export interface IRadio {
  label: string;
  isRequired: boolean;
  value: string;
  setValue: setStateAction<string>;
  name?: string;
  extraBtn?: ReactNode;
  extraElement?: ReactNode;
}

export type setStateAction<T> = Dispatch<SetStateAction<T>> 