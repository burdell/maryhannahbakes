import {} from './styles.css'
import SanityBlockContent, {
  BlockContentProps,
} from '@sanity/block-content-to-react'

import { config } from '~/lib/sanity/config'

export function BlockContent({ blocks }: { blocks: BlockContentProps }) {
  return (
    <div className="block-content">
      <SanityBlockContent
        blocks={blocks}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        projectId={config.projectId}
        dataset={config.dataset}
      />
    </div>
  )
}
