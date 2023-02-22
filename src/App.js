import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    image: languageGreetingsList[0],
    button: false,
  }

  changeImage = id => {
    const onButtonTextOnClick = languageGreetingsList.filter(
      each => each.id === id,
    )
    this.setState({image: onButtonTextOnClick[0], button: true})
  }

  render() {
    const {image, button} = this.state
    const {imageUrl, imageAltText} = image

    console.log(image.imageUrl)

    const buttonClass = button ? 'red' : ''
    return (
      <div>
        <div className="app-container">
          <h1>Multilingual Greetings</h1>
          <ul className="list">
            {languageGreetingsList.map(each => (
              <li key={each.id} className="item">
                <button
                  type="button"
                  className={buttonClass}
                  onClick={() => this.changeImage(each.id)}
                >
                  {each.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <img src={imageUrl} alt={imageAltText} />
        </div>
      </div>
    )
  }
}

export default App
