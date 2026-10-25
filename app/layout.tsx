import './globals.css';
import type { Metadata } from 'next';
import { Sidebar } from './components/Sidebar';
export const metadata:Metadata={title:'LUMINA | Tarot & Life Guidance',description:'Timeless wisdom for your love, career, money, and personal growth.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><Sidebar/><main className="app-main">{children}</main></body></html>}

