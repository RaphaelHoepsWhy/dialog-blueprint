"use client"
import * as React from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react"
import useDevice, { Device } from "@/lib/useDevice"
import { DialogDescription } from "@radix-ui/react-dialog"
import { Button } from "./ui/button"

type Props = {
  trigger: React.ReactNode
  children?: React.ReactNode
  title?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  description: string
}

export function DialogOrDrawer({
  trigger,
  children,
  title,
  open,
  onOpenChange,
  description,
}: Props) {
  const [openInternal, setOpenInternal] = useState(false)
  const isDesktop = useDevice() > Device.sm

  // component can be used in a controlled fashion (by providing an `open` prop
  // or uncontrolled (Then it will use the openInternal state)
  const isOpen = typeof open !== undefined ? open : openInternal
  const setIsOpen =
    typeof onOpenChange !== undefined ? onOpenChange : setOpenInternal

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild className="cursor-pointer">
          {trigger}
        </DialogTrigger>

        <DialogContent className="h-[70lvh]">
          {/* Makes long content scrollable within the dialog. Scrollbar currently hidden. Depending on the
          usecase/design/content you might want to show it instead */}
          <div className="scrollbar-hidden overflow-y-auto px-2">
            <DialogHeader className="pb-10 pt-4">
              {/* Title and description required for accessibility */}
              {/* If we don't want to render this, use <VisiuallyHidden> (@radix-ui/react-visually-hidden) to hide it */}
              <DialogTitle className="pb-4">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
            <DialogFooter className="mb-8 flex-row justify-end">
              {/* You can manage buttons by adding a prop `footer` to this component and passing in the buttons. Similar to the trigger prop */}
              <Button>Submit</Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    // setting autoFocus={true} fixes a browser warning regarding accessibility
    // https://github.com/emilkowalski/vaul/issues/517
    <Drawer open={isOpen} onOpenChange={setIsOpen} autoFocus={true}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <div className="overflow-y-auto px-4">
          <DrawerHeader className="px-0 text-left">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {children}
          <DrawerFooter className="mb-16">
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
