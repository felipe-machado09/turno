<?php

namespace App\Repositories\Transaction;

use App\Models\User;
use App\Models\Transaction;
use App\Repositories\Transaction\TransactionRepositoryInterface;


class TransactionRepository implements TransactionRepositoryInterface
{
    public function all()
    {
        return Transaction::paginate(config('app.pagination.default'));
    }

    public function allAdmin(array $filter)
    {
        return Transaction::NotApproved()
            ->filter($filter)
            ->paginate(config('app.pagination.default'));
    }

    public function findBy(string $attribute, string $value, array $filter)
    {
        return Transaction::where($attribute, $value)->filter($filter)->paginate(config('app.pagination.default'));
    }

    public function findByIdWithRelations($transactionId, array $relations)
    {
        return Transaction::with($relations)->findOrFail($transactionId);
    }

    public function getAllUsers()
    {
        return User::select('id', 'name')->get();
    }

    public function create(array $data)
    {
        return Transaction::create($data);
    }

    public function update(Transaction $transaction, array $data)
    {
        $transaction->update($data);
        return $transaction;
    }

    public function delete(Transaction $transaction)
    {
        $transaction->delete();
    }

    public function findOrFail($id)
    {
        return Transaction::findOrFail($id);
    }
}
