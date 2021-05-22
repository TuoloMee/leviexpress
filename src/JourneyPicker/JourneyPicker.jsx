import React, {useState} from 'react';
import './style.css';
import mapImage from './img/map.svg';

export const JourneyPicker = () => {

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  }
  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log('Odesílám formulář s cestou');
    console.log(fromCity);
    console.log(toCity);
    console.log(date);
  }

return (
<>
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form onSubmit={handleSubmit} className="journey-picker__form">
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value={fromCity} onChange={handleFromCityChange}>
            <option value="">Vyberte</option>
            <option value="Mesto1">Město 1</option>
            <option value="Mesto2">Město 2</option>
            <option value="Mesto3">Město 3</option>
            <option value="Mesto4">Město 4</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select value={toCity} onChange={handleToCityChange}>
            <option value="">Vyberte</option>
            <option value="Mesto1">Město 1</option>
            <option value="Mesto2">Město 2</option>
            <option value="Mesto3">Město 3</option>
            <option value="Mesto4">Město 4</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select value={date} onChange={handleDateChange}>
            <option value="">Vyberte</option>
            <option>20.05.2021</option>
            <option>21.05.2021</option>
            <option>22.05.2021</option>
            <option>23.05.2021</option>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button className="btn" type="submit">Vyhledat spoj</button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
  </>
    )};