import { Dispatch, ReactNode, SetStateAction } from "react";

export interface InputProps {
  label: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  inputMode?: any;
  value?: string;
  name?: string;
}

export interface SelectProps {
  options: string[];
  label: string;
  placeholder: string;
  isRequired: boolean;
  value?: string;
  onChange: (value: string) => void;
}

export interface IFunctionSelector {
  heading: string;
  desc: string;
  sectionAOptions: string[];
  sectionBOptions: string[];
  noOfLines?: number;
  isSmall?: boolean;
}

export interface IGroupListing {
  groups: Record<string, string>[];
  sectionAOptions: string[];
  sectionBOptions: string[];
  sectionAPlaceholder: string;
  sectionBPlaceholder: string;
  fieldALabel: string;
  fieldBLabel: string;
  handleChange: (id: string, field: string, value: string) => void;
  removeGroup: (id: string) => void;
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