import { useState, useEffect } from "react";
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

const apiGithubCountries = "https://ih-countries-api.herokuapp.com/countries";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(apiGithubCountries)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      });
  }, []);

  return (
    <div className="container flex row wrap around">
      <div className="col countries-list">
        <CountriesList countries={countries} />
      </div>
      <div className="col country-info">
        <CountryDetails countries={countries} />
      </div>
    </div>
  );
};

export default Countries;
