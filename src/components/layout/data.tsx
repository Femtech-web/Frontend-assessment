import {
  HomeIcon,
  DocumentIcon,
  PeopleIcon,
  NoteIcon,
  NewspaperIcon,
  CallIcon,
  TaskIcon,
  NotificationIcon,
  MenuIcon,
  EditIcon,
  LogoutIcon,
} from "@/assets/icons/sidebar";

const colorPrimary = "#464B50";
const colorGreen = "#75C5C1";

export const routes = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <HomeIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "Document Management",
    url: "/document-management",
    icon: <DocumentIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <DocumentIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "Patient Information",
    url: "/patient-information",
    icon: <PeopleIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <PeopleIcon w="18" h="18" stroke={colorGreen} />,
  },

  {
    name: "Agenda",
    url: "/agenda",
    icon: <NoteIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <NoteIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "News by Department",
    url: "/department-news",
    icon: <NewspaperIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <NewspaperIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "Phone numbers",
    url: "/telephone",
    icon: <CallIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <CallIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "My to do Protocols",
    url: "/todos",
    icon: <TaskIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <TaskIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "My Notifications",
    url: "/notifications",
    icon: <NotificationIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <NotificationIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "Knowledge Base",
    url: "/knowledge-base",
    icon: <MenuIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <MenuIcon w="18" h="18" stroke={colorGreen} />,
  },

  {
    name: "All the news",
    url: "/news",
    icon: <EditIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <EditIcon w="18" h="18" stroke={colorGreen} />,
  },
  {
    name: "Backend",
    url: "/backend",
    icon: <LogoutIcon w="18" h="18" stroke={colorPrimary} />,
    activeIcon: <LogoutIcon w="18" h="18" stroke={colorGreen} />,
  },
];
