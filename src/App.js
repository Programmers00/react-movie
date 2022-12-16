import { useEffect, useState } from 'react'

function App() {
  // data
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [selectedCoin, setSelectedCoin] = useState('')
  const [dollar, setDollar] = useState(0)
  const [coinSymbol, setCoinSymbol] = useState('')
  const [coinPrice, setCoinPrice] = useState(0)
  // useEffect
  useEffect(() => {
    // get Coin Api
    fetch('https://api.coinpaprika.com/v1/tickers').then(response => response.json()).then(coinsArray => {
      setCoins(coinsArray)
      setSelectedCoin(coinsArray[0].id)
      setCoinSymbol(coinsArray[0].symbol)
      setCoinPrice(coinsArray[0].quotes.USD.price)
      setLoading(false)
    })
  }, [])
  // functions
  /** select Coin */
  const onCoinChange = (event) => {
    setSelectedCoin(event.target.value)
    const coinId = event.target.value
    const item = coins.find(item => item.id === coinId)
    setCoinSymbol(item.symbol)
    setCoinPrice(item.quotes.USD.price)
  }
  /** how much dollar */
  const onDollarChange = (event) => setDollar(event.target.value)
  return (
    <div>
      <h1>Coin Tracker({coins.length})</h1>
      {loading ? <h2>Loading...</h2> :
        <div>
            <h2>{`${dollar} USD To ${ dollar / coinPrice} ${coinSymbol} `}</h2>
          <form>
            <label htmlFor='dollar'>$</label>
            <input onChange={ onDollarChange } id='dollar' type='number' placeholder='USD'></input>
          </form>
          <select value={selectedCoin} onChange={onCoinChange} >
            {coins.map(item => <option value={item.id} key={item.id}>{item.name}({item.symbol}) : ${item.quotes.USD.price} </option>)}
          </select>
        </div>}
      
    </div>
  )
}
export default App;
