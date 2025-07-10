
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
    <Header />
    <MainContent />
    <Footer />
    <WelcomeMessage />
    <UserProfile  name = "Lyn Munene" age = {20} bio ="AlX Student" />
    </>
  )
}

export default App
