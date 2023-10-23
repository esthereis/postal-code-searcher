import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import { get } from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [postalCode, setPostalCode] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Please provide a Postal Code!');
      return;
    }

    try {
      const response = await get(input);
      setPostalCode(response.data.results[input][0]);
      console.log(response.data.results[input][0]);
      setInput('');
    } catch {
      alert('Failed to search adress');
      setInput('');
    }
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>Postal Code Searcher</h1>

        <div className='containerInput'>
          <input
            type='text'
            placeholder='Type your Postal Code...'
            value={input}
            onChange={event => setInput(event.target.value)}
          />

          <button className='buttonSearch' onClick={handleSearch}>
            <FiSearch size={25} color='#FFF' />
          </button>
        </div>

        {Object.keys(postalCode).length > 0 && (
          <main className='main'>
            <h2>Zip Code: {postalCode.postal_code}</h2>

            <span>Country: {postalCode.country_code}</span>
            <span>Complemento:{postalCode.complemento}</span>
            <span>City: {postalCode.city}</span>
            <span>
              {postalCode.localidade} {postalCode.uf}
            </span>
          </main>
        )}
      </div>
    </>
  );
}

export default App;
