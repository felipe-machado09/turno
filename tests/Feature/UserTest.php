<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Illuminate\Http\Response;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class UserTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    use WithoutMiddleware;
    
    public function test_me(): void
    {
        $user = User::factory()->create();

        Sanctum::actingAs($user);

        $response = $this->getJson('/api/v1/users/me');
        $content = $response->getContent();

        $decodedContent = json_decode($content, true);

        $this->assertArrayHasKey('balance', $decodedContent['data']);
        $this->assertNotNull($decodedContent['data']['balance']);

        $response->assertStatus(Response::HTTP_OK);

    }
}
