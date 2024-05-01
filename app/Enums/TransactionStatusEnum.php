<?php

namespace App\Enums;

enum TransactionStatusEnum: string
{
    case DEPOSIT   = 'deposit'; 
    case PURCHASE = 'purchase'; 

    public function label(): string
    {
        return match($this) {
            self::DEPOSIT => 'Deposit',
            self::PURCHASE => 'Purchase',
        };
    }

    public static function asArray()
    {
        return collect(self::cases())->map(function ($case) {
            return ['label' => $case->label(), 'value' => $case->value];
        })->all();
    }
}
