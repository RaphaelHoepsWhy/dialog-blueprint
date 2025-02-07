import React from "react"

type Props = {
  className?: string
}

export default function Content({}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-72 items-center justify-center rounded-md bg-neutral-800">
        Content Block{" "}
      </div>
      <div className="flex h-72 items-center justify-center rounded-md bg-neutral-800">
        Content Block{" "}
      </div>
      <div className="mb-8 flex h-72 items-center justify-center rounded-md bg-neutral-800">
        Content Block{" "}
      </div>
    </div>
  )
}
