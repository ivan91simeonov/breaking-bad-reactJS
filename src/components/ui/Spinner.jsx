import spinner from '../../img/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{ width: '20rem', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
