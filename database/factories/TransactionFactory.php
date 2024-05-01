<?php

namespace Database\Factories;

use App\Enums\TransactionStatusEnum;
use App\Models\User;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{

    protected $model = Transaction::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(), 
            'type' => $this->faker->randomElement([TransactionStatusEnum::DEPOSIT, TransactionStatusEnum::PURCHASE]),
            'amount' => $this->faker->randomFloat(2, 10, 1000), 
            'description' => $this->faker->sentence, 
            'approved' => $this->faker->boolean, 
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'), 
            'updated_at' => $this->faker->dateTimeBetween('-1 year', 'now'), 
        ];
    }
}
