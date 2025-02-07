"use client"
import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react"
import useDevice, { Device } from "@/lib/useDevice"
import { DialogDescription } from "@radix-ui/react-dialog"

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

  const openProp = typeof open !== undefined ? open : openInternal
  const onOpenChangeProp =
    typeof onOpenChange !== undefined ? onOpenChange : setOpenInternal

  if (isDesktop) {
    return (
      <Dialog open={openProp} onOpenChange={onOpenChangeProp}>
        <DialogTrigger asChild className="cursor-pointer">
          {trigger}
        </DialogTrigger>
        <DialogContent>
          {/* Makes long content scrollable within the dialog*/}
          <div className="overflow-y-auto px-2">
            <DialogHeader className="pb-10 pt-4">
              {/* Title and description required for accessibility */}
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
            {children}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={openProp} onOpenChange={onOpenChangeProp}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <div className="overflow-y-auto px-4">
          <DrawerHeader className="px-0 text-left">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
