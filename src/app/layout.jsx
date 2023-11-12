import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider';
import Header from '@/components/Header';
import TaskProvider from './context/TaskProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Task App",
  description: "SiteWeb to mangage tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <TaskProvider>
            {children}
          </TaskProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
