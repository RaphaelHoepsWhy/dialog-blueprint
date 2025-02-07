import { DialogOrDrawer } from "@/components/DialogOrDrawer"
import { Maximize } from "lucide-react"
import Content from "./Content"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <DialogOrDrawer
        trigger={
          <Button>
            <Maximize />
            Open
          </Button>
        }
        title={"Scrollable overlay"}
        description={
          "We're showing some dummy content blocks here. You should be able to scroll within the overlay"
        }
      >
        <Content />
      </DialogOrDrawer>
    </div>
  )
}
