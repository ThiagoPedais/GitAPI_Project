import './styles.scss';

import ResultCard from 'components/ResultCard';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  usuario: string;
};

type Perfil = {
  avatar_url: string;
  url: string;
  location: string;
  followers: number;
  login : string;
};

const GitSearch = () => {
  const [perfil, setPerfil] = useState<Perfil>();

  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.usuario}`)
      .then((response) => {
        setPerfil(response.data);
      })
      .catch((error) => {
        setPerfil(undefined);
        console.log(error);
      });
  };

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Encontre um perfil Github</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="usuario"
              className="search-input"
              placeholder="Usuário Github"
              value={formData.usuario}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>

        {perfil &&
          <>
            <ResultCard
             avatar = {perfil.avatar_url}
             perfil = {perfil.url}
             followers = {perfil.followers}
             locality = {perfil.location}
             name= {perfil.login}
             />            
          </>
        }
      </div>
    </div>
  );
};

export default GitSearch;
