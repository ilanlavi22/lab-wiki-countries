import { Link } from "react-router-dom";
const CountriesList = ({ countries }) => {
  return (
    <div className="countries-list">
      <h1>Countries list</h1>
      {countries.map((country) => {
        const { _id, alpha3Code, alpha2Code, name } = country;
        let countryFlag = `https://flagpedia.net/data/flags/h120/${alpha2Code.toLowerCase()}.png`;
        return (
          <div key={_id} className="">
            <Link to={`/countries/${alpha3Code}`}>{name.common}</Link>
            <img src={countryFlag} alt={name.common} />
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
