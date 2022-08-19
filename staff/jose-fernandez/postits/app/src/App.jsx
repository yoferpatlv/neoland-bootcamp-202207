// const { useState } = React
import {useState} from 'react'
import Feedback from './components/Feedback'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Loggito from './utils/Loggito'
import Context from './utils/Context'
import './App.css'

function App() {
    const logger = new Loggito('App')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedback, setFeedback] = useState({ message: null, level: null })

    const handleNavigationToRegister = () => {
        setView('register')

        logger.debug('setView', 'register')
    }

    const handleNavigationToLogin = () => {
        setView('login')

        logger.debug('setView', 'login')
    }

    const handleNavigationToHome = () => {
        setView('home')

        logger.debug('setView', 'home')
    }

    const handleLogoutClick = () => {
        delete sessionStorage.token

        handleNavigationToLogin()
    }

    const handleAcceptFeedback = () => {
        const feedback = { message: null, level: null }

        setFeedback(feedback)

        logger.debug('setFeedback',feedback)
    }

    const handleFeedback = feedback =>{
        setFeedback(feedback)

        logger.debug('setFeedback',feedback)
    }

    logger.info('return')

    const toggleTheme = () => {document.documentElement.classList.toggle('light')}
    //
    return <Context.Provider value={{handleFeedback,toggleTheme}}>
        <div className="App container container--full">
        {view === 'login' && <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome}  />}
        {view === 'register' && <RegisterPage onLinkClick={handleNavigationToLogin} onSingUp={handleNavigationToLogin} />}
        {view === 'home' && <HomePage onLogoutClick={handleLogoutClick} />}
    
        {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback}/>}
        </div>
    </Context.Provider>
}

export default App
