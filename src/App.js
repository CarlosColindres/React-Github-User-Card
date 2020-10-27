import React, { Component } from 'react'
import Card from './components/Card'
import axios from 'axios'


export default class App extends Component {
  
  constructor() {
    super() 
    this.state = {
      userData: {}
    }
  }

  fetchDdata = () => {
    axios.get('https://api.github.com/users/CarlosColindres')
      .then(res => this.setState({userData: res.data}))
      .catch(err => console.log(err))
  } 

  componentDidMount() {
    this.fetchDdata()
  }
  render() {
    return (
      <div className='container'>
        <Card userData={this.state.userData}/>
      </div>
    )
  }
}
