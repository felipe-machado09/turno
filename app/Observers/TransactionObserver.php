<?php

namespace App\Observers;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Support\Facades\Log;
use App\Enums\TransactionStatusEnum;

class TransactionObserver
{
    public function created(Transaction $transaction)
    {
        if (!$transaction->done) {
            $user = $transaction->user;
            if ($user) {
                if ($transaction->type === TransactionStatusEnum::DEPOSIT && $transaction->approved) {
                    $user->increment('balance', $transaction->amount);
                    $transaction->done = true;
                } elseif ($transaction->type === TransactionStatusEnum::PURCHASE) {
                    $user->decrement('balance', $transaction->amount);
                    $transaction->approved = true;
                    $transaction->done = true;
                }
                $transaction->save();
            }
        }
    }
    
    public function updated(Transaction $transaction): void
    {
        $user = $transaction->user;
        if (!$transaction->done) {
            if ($transaction->type === TransactionStatusEnum::PURCHASE) {
                $user->decrement('balance', $transaction->amount);
                $transaction->approved = true;
                $transaction->done = true;
                $transaction->save();
            } elseif ($transaction->type === TransactionStatusEnum::DEPOSIT && $transaction->approved) {
                $user->increment('balance', $transaction->amount);
                $transaction->done = true;
                $transaction->save();
            }
        }
    }

}
