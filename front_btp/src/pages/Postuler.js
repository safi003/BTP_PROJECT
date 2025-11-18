import React, { useState } from 'react';
import '../styles/Postuler.css';
import api from '../api/api';

function Postuler() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    date_naissance: '',
    region: '',
    ville: '',
    adresse: '',
    categorie: '',
    cv: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await api.post('/candidatures', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      alert("✅ Candidature envoyée avec succès !");
    } catch (error) {
      console.error("Erreur:", error);
      alert("❌ Échec de l’envoi de la candidature");
    }
  };

  return (
    <div className="postuler-page">
      <div className="postuler-intro">
        <h3>Rejoignez notre équipe !</h3>
        <p>
          Vous souhaitez intégrer notre entreprise et contribuer à nos projets BTP et multi-sectoriels ?
          Remplissez le formulaire ci-dessous pour postuler. 
          Les champs marqués d’un <span className="required">*</span> sont obligatoires.
        </p>
      </div>

      <div className="postuler-container">
        <h2>Postuler Maintenant</h2>

        <form onSubmit={handleSubmit} className="form-postuler">

          {/* Nom */}
          <label>
            Nom <span className="required">*</span>
          </label>
          <input 
            type="text" 
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />

          {/* Prénom */}
          <label>
            Prénom <span className="required">*</span>
          </label>
          <input 
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label>Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: exemple@mail.com"
          />

          {/* Téléphone */}
          <label>
            Téléphone <span className="required">*</span>
          </label>
          <input 
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />

          {/* Date de naissance */}
          <label>
            Date de naissance <span className="required">*</span>
          </label>
          <input 
            type="date"
            name="date_naissance"
            value={formData.date_naissance}
            onChange={handleChange}
            required
          />

          {/* Région */}
          <label>
            Région <span className="required">*</span>
          </label>
          <select 
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisir une région --</option>
            <option value="Boké">Boké</option>
            <option value="Conakry">Conakry</option>
            <option value="Faranah">Faranah</option>
            <option value="Kankan">Kankan</option>
            <option value="Kindia">Kindia</option>
            <option value="Labé">Labé</option>
            <option value="Mamou">Mamou</option>
            <option value="Nzérékoré">Nzérékoré</option>
          </select>

          {/* Ville */}
          <label>
            Ville <span className="required">*</span>
          </label>
          <input 
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            required
          />

          {/* Adresse */}
          <label>
            Adresse <span className="required">*</span>
          </label>
          <input 
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            required
          />

          {/* Catégorie */}
          <label>
            Profession / Catégorie <span className="required">*</span>
          </label>
          <select 
            name="categorie"
            value={formData.categorie}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisir votre profession --</option>
            <option value="maçon">Maçon</option>
            <option value="plombier">Plombier</option>
            <option value="électricien">Électricien</option>
            <option value="menuisier">Menuisier</option>
            <option value="peintre">Peintre</option>
            <option value="autre">Autre</option>
          </select>

          {/* CV */}
          <label>
            CV (optionnel) :
          </label>
          <input 
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />

          {/* Photo */}
          <label>
            Photo (optionnelle) :
          </label>
          <input 
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit" className="btn-submit">
            Envoyer la candidature
          </button>
        </form>
      </div>
    </div>
  );
}

export default Postuler;
