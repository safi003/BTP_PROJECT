<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidatureController;



// ------------------ ROUTES PUBLIQUES ------------------ //
// Connexion admin
Route::post('/login', [AuthController::class, 'login']);

// Soumission publique d'une candidature
Route::post('/candidatures', [CandidatureController::class, 'store']);


// ------------------ ROUTES PROTEGEES ------------------ //
Route::middleware('auth:sanctum')->group(function () {

    // Déconnexion admin
    Route::post('/logout', [AuthController::class, 'logout']);

    // Liste des candidatures (accessible uniquement aux admins)
    Route::get('/candidatures', [CandidatureController::class, 'index']);

});
