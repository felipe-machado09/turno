<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;

class TransactionTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     */
    public function testCreateIncome(): void
    {
        $this->browse(function (Browser $browser) {
            $user = User::where(['name' => 'User'])->first();
            $browser->loginAs($user)->visit('/admin/balance');

            $browser->press('#add-income-button')->pause(1000);

            $typeInputCSS = 'div.vs__selected-options > input';
            $browser->type($typeInputCSS, 'Deposit')->keys($typeInputCSS, '{enter}');
            $browser->type('#amount-input', '100');
            $browser->type('#description-input', 'Description test');
            $browser->press('#button-submit')->pause(2000);

            $browser->assertSee('Description test');
        });
    }
}
