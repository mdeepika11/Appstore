import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <div className="item">
      <li className="tab-list">
        <button type="button" onClick={onClickTab} className={tabClassName}>
          {displayText}
        </button>
      </li>
    </div>
  )
}

export default TabItem
