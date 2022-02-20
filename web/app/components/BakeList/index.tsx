import Dialog, { DialogOverlay, DialogContent } from '@reach/dialog'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

import type { Bake as BakeType } from '~/lib/sanity/types'
import { urlFor } from '~/lib/sanity/images'
import { BlockContent } from '~/components/BlockContent'

function Bake({
  bake,
  showBake,
}: {
  bake: BakeType
  showBake(bake: BakeType): void
}) {
  const picture = (bake.pictures || [])[0]
  const imageUrl = picture
    ? urlFor({ originalUrl: picture.asset.url, width: 400, height: 200 })
    : undefined

  return (
    <>
      <button
        className="hover:text-yellow-600 transition-colors mb-6"
        onClick={() => showBake(bake)}
      >
        <div className="text-left">
          {imageUrl && <img className="rounded mb-1" src={imageUrl} />}
          <div className="text-lg text-slate-00 font-sans mb-2 ">
            {bake.name}
          </div>
          <div className="text-slate-600">{bake.blurb}</div>
        </div>
      </button>
    </>
  )
}

function BakePictures({ bake }: { bake: BakeType }) {
  const pictures = bake.pictures

  if (!pictures || pictures.length === 0) return null

  return (
    <>
      {bake.pictures?.length === 1 ? (
        <img
          className="rounded"
          src={urlFor({
            originalUrl: pictures[0].asset.url,
            width: 900,
          })}
        />
      ) : (
        <Carousel>
          {bake.pictures.map((picture) => (
            <img
              key={picture.asset.assetId}
              className="rounded"
              src={urlFor({
                originalUrl: picture.asset.url,
                width: 900,
              })}
            />
          ))}
        </Carousel>
      )}
    </>
  )
}

export function BakeList({ bakes }: { bakes: BakeType[] }) {
  const [shownBake, setShownBake] = useState<BakeType | undefined>(undefined)
  function show(bake: BakeType) {
    setShownBake(bake)
  }
  function close() {
    setShownBake(undefined)
  }

  return (
    <>
      <div className="grid gap-2 sm:grid-cols-2 grid-cols-1 items-baseline">
        {bakes.map((bake) => (
          <Bake key={bake._id} bake={bake} showBake={show} />
        ))}
      </div>
      {shownBake && (
        <DialogOverlay onDismiss={close} style={{ padding: 0 }}>
          <DialogContent
            style={{
              padding: '1rem',
              maxWidth: '820px',
              width: '90vw',
              borderRadius: '0.25rem',
            }}
            aria-label="shown-bake"
          >
            <div>
              <div className="flex justify-end">
                <button
                  className="uppercase hover:text-yellow-600 transition-colors"
                  onClick={close}
                >
                  close
                </button>
              </div>
              <BakePictures bake={shownBake} />
              <div>
                <div className="text-lg text-slate-00 font-sans">
                  {shownBake.name}
                </div>
                <div className="text-slate-600 mb-2">{shownBake.blurb}</div>
                {shownBake.body && (
                  <div className="font-serif">
                    <BlockContent blocks={shownBake.body} />
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </DialogOverlay>
      )}
    </>
  )
}
