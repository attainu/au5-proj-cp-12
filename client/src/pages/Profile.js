import React, { Component } from 'react';
import BottomScrollListner from 'react-bottom-scroll-listener'
import {connect} from 'react-redux'
import cogoToast from 'cogo-toast'

import {logout} from '../actions/app'
import Auth from '../components/Auth'


class Profile extends Component{
    constructor(props){
        super(props)


    }

    render(){
        return(
            <div className='d-flex flex-column flex-md-row profile w-100'>
                {(this.props.pr)}
            </div>
        )
    }
}