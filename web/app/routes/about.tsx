import { Link, LinkProps } from 'react-router-dom'

import { Header } from '~/components/Header'
import { PageContent } from '~/components/PageContent'

export default function Index() {
  return (
    <div>
      <Header />
      <PageContent heading="About">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus
        in hendrerit gravida rutrum quisque non. Cras adipiscing enim eu turpis
        egestas pretium. Non enim praesent elementum facilisis. Diam in arcu
        cursus euismod quis. Sed odio morbi quis commodo. Libero id faucibus
        nisl tincidunt eget nullam. Lacus sed turpis tincidunt id aliquet risus
        feugiat in ante. Nulla malesuada pellentesque elit eget gravida. Mauris
        commodo quis imperdiet massa tincidunt nunc pulvinar. Non odio euismod
        lacinia at quis risus.
      </PageContent>
    </div>
  )
}
