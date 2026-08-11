import { RiArrowRightUpLine } from "@remixicon/react"

import {
  Frame,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

export function CosmosFrame() {
  return (
    <a
      href="https://cosmos.so/sc0tt/lucid-saga"
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-[260px] no-underline outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hover:-translate-y-0.5"
      aria-label="Lucid Saga — a collection of artwork I love, curated on Cosmos (opens in a new tab)"
    >
      <Frame spacing="xs" className="w-full">
        <FrameHeader className="flex-row items-center justify-between">
          <FrameTitle className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Currently vibing
          </FrameTitle>
          <RiArrowRightUpLine
            aria-hidden
            className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground"
          />
        </FrameHeader>

        <FramePanel fit className="p-0">
          <video
            className="aspect-square w-full object-cover"
            src="/cosmos.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden
          />
        </FramePanel>

        <FrameFooter>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Lucid Saga</span> — a
            slideshow of artwork I love, curated (not created) on Cosmos.
          </p>
        </FrameFooter>
      </Frame>
    </a>
  )
}
