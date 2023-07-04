import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onTheTop} = props
  const {suggestion} = suggestionDetails
  const onClicking = () => {
    onTheTop(suggestion)
  }
  return (
    <li className="card-container">
      <p> {suggestion} </p>
      <button className="arrow-button" onClick={onClicking}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
