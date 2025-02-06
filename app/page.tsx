import { DialogOrDrawer } from "@/components/DialogOrDrawer"
import Content from "./Content"
import { Maximize } from "lucide-react"

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <DialogOrDrawer
        trigger={
          <button className="flex items-center justify-between gap-1 rounded-full border bg-white px-4 py-2 text-black">
            <Maximize className="size-4" />
            <span className="flex items-center gap-2">
              <span className="font-semibold">{"Open"}</span>
            </span>
          </button>
        }
        title={"Overlay Content"}
        description={"Add a short description here"}
      >
        <Content />
      </DialogOrDrawer>
    </div>
  )
}
