<?php

namespace App\Models;

use Hash;
use Carbon\Carbon;
use App\Models\Role;
use DateTimeInterface;
use App\Models\Transaction;
use Laravel\Sanctum\HasApiTokens;
use App\Support\HasAdvancedFilter;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasAdvancedFilter, SoftDeletes, Notifiable, HasFactory, HasApiTokens;

    public $table = 'users';

    protected $hidden = [
        'remember_token',
        'password',
    ];

    protected $dates = [
        'email_verified_at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'name',
        'email',
        'email_verified_at',
        'balance'
    ];

    protected $filterable = [
        'id',
        'name',
        'email',
        'email_verified_at',
        'roles.title',
        'balance',
    ];

    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'password',
        'balance',
        'remember_token',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getIsAdminAttribute()
    {
        return $this->roles()->where('title', 'Admin')->exists();
    }

    public function getEmailVerifiedAtAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.datetime_format')) : null;
    }

    public function setEmailVerifiedAtAttribute($value)
    {
        $this->attributes['email_verified_at'] = $value ? Carbon::createFromFormat(config('project.datetime_format'), $value)->format('Y-m-d H:i:s') : null;
    }

    public function setPasswordAttribute($input)
    {
        if ($input) {
            $this->attributes['password'] = Hash::needsRehash($input) ? Hash::make($input) : $input;
        }
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function incomes(){
        return $this->transactions()->where('type', 'deposit')->sum('amount');
    }

    public function expenses(){
        return $this->transactions()->where('type', 'purchase')->sum('amount');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
