import { useEffect, useState } from "react"

// Add an entry for every breakpoint in tailwind-config
export const Device = {
  sm: 0,
  md: 1,
  lg: 2,
}

export default function useDevice() {
  const [device, setDevice] = useState(Device.lg)

  function getDevice() {
    if (matchMedia(`(min-width: 1024px)`).matches) {
      return Device.lg
    }
    if (matchMedia(`(min-width: 768px)`).matches) {
      return Device.md
    }
    return Device.sm
  }

  useEffect(() => {
    function onResize() {
      setDevice(getDevice())
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [setDevice])

  return device
}
