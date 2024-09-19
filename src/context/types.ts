import { ReactNode, ChangeEvent } from "react";
import { setStateAction } from "@/types";

export interface ILevelOneForm {
  department: string;
  subFolder: string;
  documentId: string;
  documentTitle: string;
  classification: string;
  version: string;
}

export interface ILevelTwoForm {
  drafter: Record<string, string>[];
  assessor: Record<string, string>[];
}

export interface ProtocolUploadProviderProps {
  children: ReactNode;
}

export interface ProtocolUploadContextProps {
  levelOneForm: ILevelOneForm;
  setLevelOneForm: setStateAction<ILevelOneForm>;
  levelTwoForm: ILevelTwoForm;
  setLevelTwoForm: setStateAction<any>;
  shouldCopyToGroup: string;
  shouldBeRuleOfLife: string;
  setShouldBeRuleOfLife: setStateAction<string>;
  setShouldCopyToGroup: setStateAction<string>;
  shouldAdjustDate: string;
  setShouldAdjustDate: setStateAction<string>;
  shouldBeABronchure: string;
  setShouldBeABronchure: setStateAction<string>;
  revisionDate: string;
  setRevisionDate: setStateAction<string>;
  setGroupsToCopy: setStateAction<any>;
  selectedFiles: FileList | null;
  setSelectedFiles: setStateAction<FileList | null>;
  handleChange: (e: ChangeEvent<HTMLInputElement>,
    setFormData: setStateAction<any>) => void;
  handleSelect: (selectedOption: string,
    name: string,
    setFormData: setStateAction<any>,
    formType: Record<string, any>) => void
  logData: () => void;
}