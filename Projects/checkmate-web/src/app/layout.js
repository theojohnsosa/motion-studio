import React from "react"
import localFont from "next/font/local";
import "./globals.css"

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff", weight: "400" },
    { path: "./fonts/Switzer-Medium.woff", weight: "500" },
    { path: "./fonts/Switzer-Semibold.woff", weight: "600" },
    { path: "./fonts/Switzer-Bold.woff", weight: "700" },
  ]
})

export const metadata = {
  title: "Checkmate"
}

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={switzer.className}>
        {children}
      </body>
    </html>
  )
}

export default layout