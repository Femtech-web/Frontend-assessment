"use client";

import React, { useContext, createContext, useState, ChangeEvent } from "react";
import {
  ProtocolUploadContextProps,
  ProtocolUploadProviderProps,
} from "./types";
import { setStateAction } from "@/types";

export const ProtocolUploadContext = createContext<
  ProtocolUploadContextProps | undefined
>(undefined);

export const ProtocolUploadProvider = ({
  children,
}: ProtocolUploadProviderProps) => {
  // ---- level one form inputs ----
  const initialLevelOneForm = {
    department: "",
    subFolder: "",
    documentId: "",
    documentTitle: "",
    classification: "",
    version: "",
  };
  const [levelOneForm, setLevelOneForm] = useState(initialLevelOneForm);

  // ----- level two form inputs ------
  const initialLevelTwoForm = {
    drafter: [],
    assessor: [],
  };
  const [levelTwoForm, setLevelTwoForm] = useState(initialLevelTwoForm);

  // ----- level three form inputs ------
  const [shouldCopyToGroup, setShouldCopyToGroup] = useState("");
  const [shouldBeRuleOfLife, setShouldBeRuleOfLife] = useState("");
  const [shouldAdjustDate, setShouldAdjustDate] = useState("");
  const [shouldBeABronchure, setShouldBeABronchure] = useState("");

  const [revisionDate, setRevisionDate] = useState("");
  const [groupsToCopy, setGroupsToCopy] = useState([]);

  // ----- selected files ----
  const [selectedFiles, setSelectedFiles] = useState<null | FileList>(null);

  // ---- Handle Change ----
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFormData: setStateAction<any>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  // ---- Handle Select ----
  const handleSelect = (
    selectedOption: any,
    name: string,
    setFormData: setStateAction<any>,
    formType: Record<string, any>
  ) => {
    const isFormKey = (name: string, form: Record<string, any>) => {
      return name in form;
    };

    if (isFormKey(name, formType)) {
      setFormData((prev: any) => ({ ...prev, [name]: selectedOption }));
    }
  };

  // ------ log all form Data ------
  const logData = () => {
    console.log(levelOneForm);
    console.log(levelTwoForm);
    console.log({
      shouldCopyToGroup,
      shouldBeRuleOfLife,
      shouldAdjustDate,
      shouldBeABronchure,
      revisionDate,
      groupsToCopy,
    });
    console.log(selectedFiles);
  };

  return (
    <ProtocolUploadContext.Provider
      value={{
        levelOneForm,
        setLevelOneForm,
        levelTwoForm,
        setLevelTwoForm,
        shouldCopyToGroup,
        shouldBeRuleOfLife,
        setShouldBeRuleOfLife,
        setShouldCopyToGroup,
        shouldAdjustDate,
        setShouldAdjustDate,
        shouldBeABronchure,
        setShouldBeABronchure,
        revisionDate,
        setRevisionDate,
        setGroupsToCopy,
        selectedFiles,
        setSelectedFiles,
        handleChange,
        handleSelect,
        logData,
      }}
    >
      {children}
    </ProtocolUploadContext.Provider>
  );
};

export const useProtocolUploadContext = (): ProtocolUploadContextProps => {
  const context = useContext(ProtocolUploadContext);
  if (!context) {
    throw new Error(
      "useProtocolUploadContext must be used within an AppProvider"
    );
  }
  return context;
};
