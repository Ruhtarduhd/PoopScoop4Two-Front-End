import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import User from '../components/User'
import NavBar from '../components/Navbar'
import {getUser} from '../actions/getUser'



export class Profile extends PureComponent {

  componentWillMount(props) {
    this.props.getUser((this.props.match.params.id))
  }

  render() {
    return (
      <div className="Profile">
          <NavBar/>
        <Title content="Profile page"/>
          <User user={this.props.user}/>
          <ul className='Pound'>
            <Title content="Your top 10 favourite dogs"/>
            {this.props.user.breedStats.slice(0,10).map(breeds => <li>{breeds.breed}</li>)}
          </ul>
      </div>
    )}
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps, {getUser})(Profile)
