import './ContMain.css'
import { useState } from 'react'
import withContext from '../utils/withContext'
// import IconButton from './Buttons/IconButton'

function ContMain() {

    const [view, setView] = useState('play')
    const onPlayVideo = () => {
        setView('stop')
        // autoPlay='false'
    }
    const onStopVideo = () => {
        setView('play')
    }

    return <div className="container ContMain">
        <section className="container-section promotionOne container">
            <div className='video-sectionOne'>
                {/* <video className='video-promotionOne' controls src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/FW22-Outdoor-UBS-hero-launch-HP-Masthead-dual-m_cwpxqw.mp4" preload='auto' autoPlay type="video/mp4"></video> */}
                <video className='video-promotionOne' autoPlay loop>
                    <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/FW22-Outdoor-UBS-hero-launch-HP-Masthead-dual-m_cwpxqw.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='control-play'>
                {view === "play" && <a href="" onClick={onStopVideo}><img className='featurette-icon--img' src="https://i.postimg.cc/2yDYngbJ/pause.png" alt="" /></a>}
                {view === "stop" && <a href="" onClick={onPlayVideo}><img className='featurette-icon--img' src="https://i.postimg.cc/mZQXnvMk/play.png" alt="" /></a>}
            </div>
            <div className="container-portrait">
                <div className="portrait-title">
                    <h2>José María Fernández Paredes</h2>
                    <h3>Informatic Engineer</h3>
                    <h3><a href="https://www.javascript.com/">JavaScript</a></h3>
                </div>
            </div>

        </section>

        <section className="container-section exp container">
            <div className="info-exp">
                <h1>Biography</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing lit.Nam voluptatem saepe cumque eius, eligendi sunt nesciunt! Incidunt tempore, pariatur libero dolorem reiciendis ipsa, explicabo laborum iusto ducimus quo repellendus architecto.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing lit.Nam voluptatem saepe cumque eius, eligendi sunt nesciunt! Incidunt tempore, pariatur libero dolorem reiciendis ipsa, explicabo laborum iusto ducimus quo repellendus architecto.
                </p>
                <p>My interests lie in solving problems related to large-scale distributed web development and application development.</p>
                <div className='info-exp--details'>
                    <div className="interests">
                        <h3>Interests</h3>
                        <ul className='ul-interests'>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        <ul className='ul-education'>
                            <li>
                                <div className='container-education'>
                                    <img className='network-icon--img graduation' src="https://i.postimg.cc/TPBjJY1P/graduate-cap.png" alt="" />
                                    <div className="description">
                                        <p className='course'>Further Education</p>
                                        <p className='institution'>IE PNP JLR</p>
                                    </div>
                                </div>
                                <div className='container-education'>
                                    <img className='network-icon--img graduation' src="https://i.postimg.cc/TPBjJY1P/graduate-cap.png" alt="" />
                                    <div className="description">
                                        <p className='course'>Further Education</p>
                                        <p className='institution'>IE PNP JLR</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>

                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>

        <section className="container-section skills ">
            <div className="container-skills">
                <div className="item--skills one">
                    <h1>Skills</h1>
                </div>
                <div className="item--skills two">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills three">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills four">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills five">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills six">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills seven">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
            </div>

        </section>
        {/* change experience */}
        <section className="container-section experience ">
            <div className="container-experience">
                <div className="item--skills one">
                    <h1>Experience</h1>
                </div>
                <div className="item--skills two">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills three">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>

            </div>

        </section>

    </div>
}
export default withContext(ContMain)