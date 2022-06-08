import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

function CharacterGrad({ items, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
}

export default CharacterGrad;
