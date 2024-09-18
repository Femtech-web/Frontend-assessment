import {
  DashboardIcon,
  TaskIcon,
  DocumentIcon,
} from "@/assets/icons/todo-protocol-page";

export const navBtns = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    activeIcon: <DashboardIcon stroke="#fff" />,
  },
  {
    name: "Tasks",
    icon: <TaskIcon />,
    activeIcon: <TaskIcon stroke="#fff" />,
  },
  {
    name: "Documents",
    icon: <DocumentIcon />,
    activeIcon: <DocumentIcon stroke="#fff" />,
  },
];

export const taskData = [
  {
    status: "Closed",
    figure: "16",
  },
  {
    status: "Open",
    figure: "30",
  },
  {
    status: "To judge",
    figure: "20",
  },
  {
    status: "To be assigned",
    figure: "60",
  },
  {
    status: "Revision",
    figure: "160",
  },
];

export const options = ["option 1", "option 2", "option 3", "option 4"];

export const departmentOptions = [
  "Anesthesias department",
  "Csa",
  "Facility",
  "Logistics",
  "Medical Clinic Velsen",
  "Medical Specialist department",
  "Ok assisting protocols",
  "P&O",
  "Outpatient clinic",
  "Radiology",
  "Recovery department",
  "Nursing Department",
];

export const classificationOptions = [
  "Public",
  "Internal",
  "Confidential",
  "Highly Confidential",
];

export const subFolderOptions = [
  "General Anesthesia",
  "Local Anesthesia",
  "Pediatric Anesthesia",
  "Preoperative Assessment",
  "Anesthesia Documentation",
  "Surgical Protocols",
  "Sterilization Procedures",
  "Pre-Op Preparations",
  "Post-Op Care",
  "Operating Room Equipment",
];
