import React from "react";
import '/styles/globals.css';

export const metadata = {
  title: 'ChinwagGPT Messager',
  description: 'Created by Kayode Olumo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex-box">
          {/* {SideBar} */}

          {/* {ClientProvider - Notifications} */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
        
      </body>
    </html>
  )
}
