<?php

namespace App\Http\Controllers;

use App\Models\Candidature;
use Illuminate\Http\Request;

class CandidatureController extends Controller
{
    // Récupérer toutes les candidatures (avec filtre ville & catégorie)
    public function index(Request $request)
    {
        $user = $request->user(); // récupère l'utilisateur connecté

        // Vérification du rôle admin
        if (!$user->is_admin) {
            return response()->json(['message' => 'Accès refusé'], 403);
        }

        $query = Candidature::query();

        // Filtrer par ville si fourni
        if ($request->has('ville') && !empty($request->ville)) {
            $query->where('ville', $request->ville);
        }

        // Filtrer par catégorie si fourni
        if ($request->has('categorie') && !empty($request->categorie)) {
            $query->where('categorie', $request->categorie);
        }

        $candidatures = $query->get();

        return response()->json($candidatures);
    }

    // Stocker une candidature (publique)
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'telephone' => 'required|string|max:20',
            'date_naissance' => 'required|date',
            'region' => 'required|string|max:255',
            'ville' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'categorie' => 'required|string|max:255',
            'cv' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'photo' => 'nullable|image|max:2048',
        ]);

        // Gestion des fichiers
        $cvPath = $request->file('cv') ? $request->file('cv')->store('cvs', 'public') : null;
        $photoPath = $request->file('photo') ? $request->file('photo')->store('photos', 'public') : null;

        $candidature = Candidature::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'telephone' => $request->telephone,
            'date_naissance' => $request->date_naissance,
            'region' => $request->region,
            'ville' => $request->ville,
            'adresse' => $request->adresse,
            'categorie' => $request->categorie,
            'cv' => $cvPath,
            'photo' => $photoPath,
        ]);

        return response()->json([
            'message' => 'Candidature enregistrée avec succès',
            'candidature' => $candidature
        ],201);
  }
}

