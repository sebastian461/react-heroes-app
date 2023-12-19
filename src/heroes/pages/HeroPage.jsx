import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams(); //* otro custom hook
  const heroe = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!heroe) return <Navigate to={"/"} replace={true} />;

  const heroImage = `/src/assets/heroes/${heroe.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImage}
          alt={heroe.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-grupo-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {heroe.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {heroe.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {heroe.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{heroe.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
