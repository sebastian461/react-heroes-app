import { HeroeCard } from "./";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import PropTypes from "prop-types";

export const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((h) => (
        <HeroeCard key={h.id} {...h} />
      ))}
    </div>
  );
};

HeroeList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
