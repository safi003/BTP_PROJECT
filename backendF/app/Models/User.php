<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // Champs modifiables
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin', // seul rôle existant
    ];

    // Champs cachés dans les réponses
    protected $hidden = [
        'password',
        'remember_token',
    ];
}
