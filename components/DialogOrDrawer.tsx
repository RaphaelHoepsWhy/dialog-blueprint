"use client"
import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
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

type Props = {
  trigger: React.ReactNode
  children?: React.ReactNode
  title?: string
  description?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function DialogOrDrawer({
  trigger,
  children,
  title,
  description,
  open,
  onOpenChange,
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
          <div className="overflow-y-auto px-2">
            <DialogHeader className="py-4">
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
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
