<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;
use App\Models\Transaction;

class CheckTest extends DuskTestCase
{
    public function getDescription(): string
    {
        return "Admin test - dusk";
    }

    public function setUp(): void
    {
        parent::setUp();

        Transaction::factory()->create([
            'description' => $this->getDescription()
        ]);
    }

    private function analyzeCheck(bool $result): void
    {
        $this->browse(function (Browser $browser) use($result) {
            $user = User::where(['name' => 'Admin'])->first();
            $browser->loginAs($user)->visit('/admin/check/list')->pause(1500);

            $browser->assertSee($this->getDescription());

            $browser->press('td.text-right.td-actions > div > a > i')->pause(1000);
            $button = $result === true ? '#approve-button' : '#disapprove-button';
            $browser->press($button)->pause(2000);

            $this->assertDatabaseHas('transactions', [
                'description' => $this->getDescription(),
                'approved' => $result,
            ]);
        });
    }

    public function testAcceptCheck(): void
    {
        $this->analyzeCheck(true);
    }

    public function testDeclineCheck(): void
    {
        $this->analyzeCheck(false);
    }
}
