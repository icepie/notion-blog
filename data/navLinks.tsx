import { FaCode, FaFan, FaHome, FaProjectDiagram } from 'react-icons/fa'
import { RiUser3Fill } from 'react-icons/ri'

type NavLink = {
  title: string
  url: string
  icon?: React.ReactNode
  pageId?: string
}

const navLinks: NavLink[] = [
  {
    title: 'Home',
    url: '/',
    icon: <FaHome />,
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: <FaProjectDiagram />,
  },
  {
    title: 'Friends',
    url: '/friends',
    icon: <FaFan />,
  },
  {
    title: 'About',
    url: '/about',
    icon: <RiUser3Fill />,
  },
]

export default navLinks
