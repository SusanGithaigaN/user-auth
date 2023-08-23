import './Home.css'

import Main from './Pages/Main';
import AgensImage from './Pages/AgensImage'
import Features from './Pages/Features';
import DBEngine from './Pages/DBEngine';
import EnterprisePackage from './Pages/EnterprisePackage';



export default function Home() {
  return (
    <div id=''>
      {/* landing page */}
      <Main />

      {/* Agens Enterprise package */}
      <AgensImage />

      {/* Key Features */}
      <Features />

      {/* DB Engine section */}
      <DBEngine />
      
      {/* enterprise package section */}
      <EnterprisePackage />
    </div>
  )
}
