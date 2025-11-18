import React, { useState, useEffect } from 'react';
import api from '../api/api'; 
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const [candidatures, setCandidatures] = useState([]);
  const [searchVille, setSearchVille] = useState('');
  const [searchCategorie, setSearchCategorie] = useState('');

  useEffect(() => {
    api.get("http://127.0.0.1:8000/api/candidatures", {
      withCredentials: true // utile si tu utilises Sanctum avec cookies
    })
    .then(response => {
      setCandidatures(response.data);
    })
    .catch(error => {
      console.error("Erreur lors du chargement :", error);
    });
  }, []);

  const filteredCandidatures = candidatures.filter(candidat => {
    return (
      candidat.ville.toLowerCase().includes(searchVille.toLowerCase()) &&
      (searchCategorie === '' || candidat.categorie === searchCategorie)
    );
  });

  return (
    <div className="admin-dashboard">
      <h2>Espace Admin - Candidatures</h2>

      {/* Filtres */}
      <div className="filters">
        <input
          type="text"
          placeholder="Rechercher par ville"
          value={searchVille}
          onChange={(e) => setSearchVille(e.target.value)}
        />

        <select
          value={searchCategorie}
          onChange={(e) => setSearchCategorie(e.target.value)}
        >
          <option value="">Toutes les Proffession</option>
          <option value="Maçon">Maçon</option>
          <option value="Plombier">Plombier</option>
          <option value="Électricien">Électricien</option>
          <option value="Menuisier">Menuisier</option>
          <option value="Peintre">Peintre</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      {/* Tableau */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Photos</th>
              <th>Noms</th>
              <th>Prénoms</th>
              <th>Email</th>
              <th>Téléphones</th>
              <th>Dates de Naissances</th>
              <th>Régions</th>
              <th>Villes</th>
              <th>Adresses</th>
              <th>Proffessions</th>
              <th>CV</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidatures.map((candidat, index) => (
              <tr key={index}>
                <td>
                  {candidat.photo ? (
                    <img
                      src={`http://127.0.0.1:8000/storage/${candidat.photo}`}
                      alt={`${candidat.nom} ${candidat.prenom}`}
                      width="50"
                      height="50"
                    />
                  ) : 'Aucune'}
                </td>
                <td>{candidat.nom}</td>
                <td>{candidat.prenom}</td>
                <td>{candidat.email}</td>
                <td>{candidat.telephone}</td>
                <td>{candidat.date_naissance}</td>
                <td>{candidat.region}</td>
                <td>{candidat.ville}</td>
                <td>{candidat.adresse}</td>
                <td>{candidat.categorie}</td>
                <td>
                  {candidat.cv ? (
                    <a
                      href={`http://127.0.0.1:8000/storage/${candidat.cv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir CV
                    </a>
                  ) : 'Aucun'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;