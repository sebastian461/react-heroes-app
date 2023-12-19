import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import PropTypes from "prop-types";

export const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((h) => (
        <li key={h.id}>{h.superhero}</li>
      ))}
    </ul>
  );
};

HeroeList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
