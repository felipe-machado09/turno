<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\TransactionSeeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            PermissionsTableSeeder::class,
            RolesTableSeeder::class,
            PermissionRoleTableSeeder::class,
            UsersTableSeeder::class,
            RoleUserTableSeeder::class,
            TransactionSeeder::class,
        ]);
    }
}
