import './App.css';
import Header from './components/ui/Header';
import CharacterGrad from './components/characters/CharacterGrad';
import Search from './components/ui/Search';
import {useState ,  useEffect} from 'react'
import axios from 'axios';

function App() {

  const [items , setItems] = useState([])
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {

    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])
  

  return (
    <div className="container">
        <Header /> 
        <Search />
        <CharacterGrad isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
