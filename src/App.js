import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sponsors from './components/Sponsors'
import MeetCoda from './components/MeetCoda'
import CodaDetails from './components/CodaDetails'
import CodaInspirations from './components/CodaInspirations'
import CodaTemplates from './components/CodaTemplates'
import CodaDoc from './components/CodaDoc'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Sponsors />
      <MeetCoda />
      <CodaDetails
        title="The doc for everyone."
        content="Coda feels familiar like a doc and engaging like an app, so your team can jump in quickly, collaborate effectively, and make decisions that stick."
        srcVideo="https://cdn.coda.io/assets/ffb1b6b834e3/img/welcome/the-doc-for-everyone-colored.mp4"
        bgColor={true}
      />
      <CodaDetails
        title="Customize to fit your team."
        content="As teams grow or plans change, you can use Coda’s building blocks to evolve your doc seamlessly—like when a to-do list graduates to a beautiful task board."
        srcVideo="https://cdn.coda.io/assets/ffb1b6b834e3/img/welcome/customize-to-fit-your-team-colored.mp4"
        bgColor={false}
      />
      <CodaDetails
        title="No more stale data."
        content="With connected data, tables talk to each other and edits show up everywhere. So you can roll-up your team’s plan to an executive dashboard and sync updates automatically."
        srcVideo="https://cdn.coda.io/assets/ffb1b6b834e3/img/welcome/no-more-stale-data-colored.mp4"
        bgColor={true}
      />
      <CodaDetails
        title="Do it all from your doc."
        content="Pull Google calendars into the team wiki and push updates to Slack automatically. Connect to the apps you use every day and add endless capabilities to your docs."
        srcVideo="https://cdn.coda.io/assets/ffb1b6b834e3/img/welcome/do-it-all-from-your-doc-colored.mp4"
        bgColor={false}
        buttonBP={true}
      />
      <CodaInspirations />
      <CodaTemplates />
      <CodaDoc />
      <Footer />
    </div>
  )
}

export default App
