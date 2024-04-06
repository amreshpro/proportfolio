import { ReactNode } from "@tanstack/react-router";

export default function LayoutContainer({children}:{children:ReactNode}) {
  return (
    <main className="flex justify-center md:p-8 sm:p-2 sm:pt-8 ">{children}</main>
  )
}