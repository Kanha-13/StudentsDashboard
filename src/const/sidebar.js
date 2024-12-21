import dashboardIcon from '../assets/icons/dashboard.png'
import studentIcon from '../assets/icons/students.png'
import chaptersIcon from '../assets/icons/chapters.png'
import helpIcon from '../assets/icons/help.png'
import reportIcon from '../assets/icons/report.png'
import settingsIcon from '../assets/icons/settings.png'
import ROUTES from './routes'
export const NavList = [
  { icon: dashboardIcon, linkTo: ROUTES.HOME, title: "Dashboard" },
  { icon: studentIcon, linkTo: ROUTES.STUDENTS, title: "Students" },
  { icon: chaptersIcon, linkTo: ROUTES.CHAPTERS, title: "Chapters" },
  { icon: helpIcon, linkTo: ROUTES.HELP, title: "Help" },
  { icon: reportIcon, linkTo: ROUTES.REPORT, title: "Report" },
  { icon: settingsIcon, linkTo: ROUTES.SETTINGS, title: "Settings" }
]