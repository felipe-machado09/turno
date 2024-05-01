<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type');
            $table->decimal('amount', 15, 2);
            $table->longText('description');
            $table->boolean('approved')->default(0)->nullable();
            $table->boolean('done')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
