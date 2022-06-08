import CharacterItem from "./CharacterItem"

function CharacterGrad({items , isLoading}) {


  return isLoading ? ( <h1>Loading...</h1> ) : <section className="cards">
      {items.map(item => (
          <CharacterItem key={item.char_id} item={item} ></CharacterItem>
      ))}
  </section>
}

export default CharacterGrad