import './index.css'

import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapitalID: countryAndCapitalsList[0].id}

  Changed = event => {
    this.setState({activeCapitalID: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalID} = this.state

    const Country = countryAndCapitalsList.find(
      EachItem => EachItem.id === activeCapitalID,
    )
    return Country.country
  }

  render() {
    const {activeCapitalID} = this.state

    const Country = this.getCountry(activeCapitalID)
    return (
      <div className="Container">
        <div className="Box">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="Question">
            <select
              className="capital"
              onChange={this.Changed}
              value={activeCapitalID}
            >
              {countryAndCapitalsList.map(Each => (
                <option key={Each.id} value={Each.id}>
                  {Each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <p className="Para">{Country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
