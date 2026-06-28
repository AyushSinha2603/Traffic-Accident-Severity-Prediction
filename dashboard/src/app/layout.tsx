import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'

export const metadata: Metadata = {
  title: 'Traffic Accident Severity Prediction | ML Dashboard',
  description: 'ML Dashboard for Traffic Accident Severity Prediction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="custom-scrollbar antialiased">
        <TopNav />
        <Sidebar />
        <main className="ml-[260px] mt-16 p-8 min-h-screen">
          <div className="max-w-[1200px] mx-auto space-y-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
