import { useState } from 'react';

function Search() {
  const [text, setText] = useState('');

  return (
    <section className="search">
      <form action="">
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange= {(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
}

export default Search;
