<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class PermissionRoleTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = Permission::all();
        
        $admin_permissions = $permissions->filter(function ($permission) {
            return $permission->title != 'transaction_access';
        });
        Role::findOrFail(1)->permissions()->sync($admin_permissions->pluck('id'));

        $user_permissions = $permissions->filter(function ($permission) {
            return substr($permission->title, 0, 6) != 'check_' && substr($permission->title, 0, 5) != 'user_' && substr($permission->title, 0, 5) != 'role_' && substr($permission->title, 0, 11) != 'permission_';
        });
        Role::findOrFail(2)->permissions()->sync($user_permissions);
    }
}
