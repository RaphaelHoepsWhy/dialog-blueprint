import { DialogOrDrawer } from "@/components/DialogOrDrawer"
import { Maximize } from "lucide-react"

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <DialogOrDrawer
        trigger={
          <button className="flex items-center justify-between gap-2 rounded-md bg-white px-3 py-2 text-black">
            <Maximize />
            Open
          </button>
        }
        title={"Title"}
        description={"Description"}
      >
        <h1>Content</h1>
      </DialogOrDrawer>
    </div>
  )
}
