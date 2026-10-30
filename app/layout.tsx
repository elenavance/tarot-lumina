import './globals.css';
import './seer-overlay.css';
import type {Metadata} from 'next';
import {Sidebar} from './components/Sidebar';
import {CosmicBackground} from './components/CosmicBackground';
export const metadata:Metadata={title:'LUMINA | Tarot & Life Guidance',description:'Timeless wisdom for your love, career, money, and personal growth.',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,title:'LUMINA',statusBarStyle:'black-translucent'},icons:{icon:[{url:'/icons/lumina-app-icon.svg',type:'image/svg+xml'}],apple:'/icons/lumina-app-icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><CosmicBackground/><Sidebar/><main className="app-main">{children}</main></body></html>}
