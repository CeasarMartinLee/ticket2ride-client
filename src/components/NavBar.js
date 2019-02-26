import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

function NavBar(props) {
    return (
        <div>
            <div>
                <button className="" onClick={() => {props.history.push('/events')}}> Uber4Tickets </button>
            </div>
            <div>
                {!props.authenticated &&
                    <div>
                        <button className="" onClick={() => {props.history.push('/login')}}> Login </button>
                        <button className="" onClick={() => {props.history.push('/register')}}> Register </button>
                    </div>}
                {props.authenticated &&
                    <div>
                        <button className="" onClick={() => {props.history.push('/logout')}}> Logout </button>
                    </div>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(NavBar))