import React from 'react'
// import {connect} from 'react-redux'
// import { Redirect } from 'react-router-dom';
// import splash from '../splash.jpg'
import './splash.css'
import Sound from 'react-sound';
import song from '../ticket2ride.mp3'

class SplashScreen extends React.Component {
  render() {
    return (
      <div>
        <Sound
          url={song}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0}
          autoLoad={true}
          loop={true}
        />
        <div style={{ height: 50 }}>

        </div>
        <div className="bounce-in-left">
          <img style={{ height: 200 }} alt="ticket pic" className="car" src="https://cdn0.iconfinder.com/data/icons/amusement-park-v2/277/amusement-park-fairground-ride-fun_07-512.png"></img>
        </div>
        <div className="bounce-in-right">
          to
        </div>

        <div className="bounce-in-left">
          <img style={{ height: 200 }} alt="car pic" className="car" src="https://di-uploads-pod4.dealerinspire.com/olympiajeep/uploads/2018/03/Driving-Car.gif"></img>
        </div>

      </div>

    )
  }
}


// const mapStateToProps = state => ({
//   authenticated: !!state.currentUser
// })

export default (SplashScreen)
// export default connect(mapStateToProps)(SplashScreen)qw

