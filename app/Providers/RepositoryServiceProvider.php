<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Transaction\TransactionRepository;
use App\Repositories\Transaction\TransactionRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(TransactionRepositoryInterface::class, TransactionRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
