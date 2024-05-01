<?php

Route::redirect('/', '/login');

Route::get('home', function() {
    $user = Auth::user();

    if ($user) {
        if ($user->is_admin) {
            return redirect('admin/check/list');
        } else {
            return redirect('admin/balance');
        }
    } else {
        return redirect()->route('login');
    }
});

Auth::routes();

Route::group([
    'prefix'     => 'admin',
    'as'         => 'admin.',
    'namespace'  => 'Admin',
    'middleware' => ['auth'],
], function () {
    Route::view('/{any?}', 'layouts.admin.app')->name('dashboard')->where('any', '.*');
});

Route::group(['prefix' => '/api/v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::get('users/me', 'UsersApiController@me')->name('users.me');
    Route::resource('users', 'UsersApiController');

    // Transactions
    Route::post('transactions/manage', 'TransactionsApiController@manage')->name('transactions.manage');
    Route::post('transactions/media', 'TransactionsApiController@storeMedia')->name('transactions.storeMedia');
    Route::resource('transactions', 'TransactionsApiController');
});