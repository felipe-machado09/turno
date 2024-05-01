<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Admin\AuthApiController;

Route::group(['prefix' => 'v1', 'as' => 'api.'], function () {

    Route::post('login',[AuthApiController::class,'login']);
    Route::post('logout',[AuthApiController::class,'logout'])
      ->middleware('auth:sanctum');

});