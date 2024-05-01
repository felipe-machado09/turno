<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\Str;

class LoginTest extends DuskTestCase
{
    public function testLogin() {
        $this->browse(function (Browser $browser) {
            $browser->visit('/');
            $browser->type('#email', 'admin@admin.com');
            $browser->type('#password', 'password');
            $browser->press('#login-button');
            $browser->pause(1000)->assertSee('Logout');
        });
    }
}