<?php

namespace App\Repositories\Transaction;

use App\Models\Transaction;

interface TransactionRepositoryInterface
{
    public function all();
    public function allAdmin(array $filter);
    public function findBy(string $attribute, string $value, array $filter);
    public function create(array $data);
    public function findByIdWithRelations(int $transactionId, array $relations);
    public function getAllUsers();
    public function update(Transaction $transaction, array $data);
    public function delete(Transaction $transaction);
    public function findOrFail(int $id);
}
