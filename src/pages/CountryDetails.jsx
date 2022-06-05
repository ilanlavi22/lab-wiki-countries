import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  //let apiGithubCountry = `https://ih-countries-api.herokuapp.com/countries/${id}`;



  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      });
  }, [id]);

  return (
    <div>
      {country && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
          />

          <h1>{country.name.common}</h1>
          <div>Capital : {country.capital.join(", ")} </div>
          <div>
            Area : {country.area} km<sup>2</sup>
          </div>
          <div>
            Borders :
            {country.borders.map((borderName) => {
              return (
                <li key={borderName}>
                  <Link to={`/${borderName}`}> {borderName}</Link>
                </li>
              );
            })}
          </div>

        </div>
      )
      }
    </div >

  );
};

export default CountryDetails;
