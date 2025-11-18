<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        // Crée ou met à jour l’admin
        User::updateOrCreate(
            ['email' => 'admin@example.com'], // identifiant unique
            [
                'name' => 'Admin',
                'password' => Hash::make('password123'), // mot de passe par défaut
                'is_admin' => true,
            ]
        );
    }
}
