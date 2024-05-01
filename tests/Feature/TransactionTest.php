<?php

namespace Tests\Feature;

use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use Illuminate\Http\Response;
use App\Models\{User,Transaction};
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\{WithFaker, RefreshDatabase};


class TransactionTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    use WithoutMiddleware;


    public function test_transaction_list()
    {
        $user = User::factory()->create();

        Gate::before(function ($user, $ability) {
            return true;
        });

        Sanctum::actingAs($user);
    
        $response = $this->getJson('/api/v1/transactions');
        
        $response->assertStatus(Response::HTTP_OK);

    }

    public function test_transaction_create()
    {
        $user = User::factory()->create();

        Gate::before(function ($user, $ability) {
            return true;
        });

        Sanctum::actingAs($user);

        $factory = Transaction::factory()->raw();

        $response = $this->postJson('/api/v1/transactions', $factory);

        $response->assertStatus(Response::HTTP_CREATED);

    }

    public function test_transaction_update()
    {
        $user = User::factory()->create();

        Gate::before(function ($user, $ability) {
            return true;
        });

        Sanctum::actingAs($user);

        $transaction = Transaction::factory()->create();

        $factory = Transaction::factory()->raw();

        $response = $this->putJson('/api/v1/transactions/'.$transaction->id, $factory);

        $response->assertStatus(Response::HTTP_ACCEPTED);

    }

    public function test_transaction_show()
    {
        $user = User::factory()->create();

        Gate::before(function ($user, $ability) {
            return true;
        });

        Sanctum::actingAs($user);

        $transaction = Transaction::factory()->create();

        $response = $this->getJson('/api/v1/transactions/'.$transaction->id);

        $response->assertStatus(Response::HTTP_OK);

    }

    public function test_transaction_delete()
    {
        $user = User::factory()->create();

        Gate::before(function ($user, $ability) {
            return true;
        });

        Sanctum::actingAs($user);

        $transaction = Transaction::factory()->create();

        $response = $this->deleteJson('/api/v1/transactions/'.$transaction->id);

        $response->assertStatus(Response::HTTP_NO_CONTENT);

    }

}
