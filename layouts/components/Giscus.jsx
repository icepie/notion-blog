import 'giscus'
import { useDarkMode } from 'lib/use-dark-mode'

const GiscusComponent = ({ className = undefined }) => {
  const { isDarkMode } = useDarkMode()

  return (
    <section className={className ?? ''}>
      <giscus-widget
        repo='icepie/notion-blog'
        repoid='R_kgDOIE1f8w'
        category='General'
        categoryid='DIC_kwDOIE1f884CRqUM'
        mapping='pathname'
        strict='0'
        reactionsenabled='1'
        emitmetadata='0'
        inputposition='bottom'
        theme={isDarkMode ? 'transparent_dark' : 'light'}
        crossorigin='anonymous'
      ></giscus-widget>
    </section>
  )
}

export default GiscusComponent
