import { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHerosByName } from "../helpers/getHerosByName";

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm({ searchText: '' });

  const heroes = useMemo(() => getHerosByName(searchText), [searchText]);

  const showSearch = searchText.length === 0;
  const showError = searchText.length > 0 && heroes.length === 0;

  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <input
            type="text"
            placeholder="Search a Hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {showSearch && (
            <div className="alert alert-primary animate__animated animate__fadeIn">Search a Hero</div>
          )}

          {showError && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              There is no Hero with <b>{searchText}</b>
            </div>
          )}

          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}/>
          ))}
        </div>
      </div>
    </>
  );
};
