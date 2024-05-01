<?php

namespace App\Services\Api\Transaction;

use App\Enums\TransactionStatusEnum;
use App\Repositories\Transaction\TransactionRepositoryInterface;


class TransactionService
{
    protected $transactionRepo;

    public function __construct(TransactionRepositoryInterface $transactionRepo)
    {
        $this->transactionRepo = $transactionRepo;
    }

    public function getAllTransactions($filter)
    {
        $user = auth()->user();

        if ($user->is_admin) {
            return $this->transactionRepo->allAdmin($filter);
        } else {
            return $this->transactionRepo->findBy('user_id', $user->id, $filter);
        }
    }

    public function getTransactionById($id)
    {
        return $this->transactionRepo->findOrFail($id);
    }

    public function storeTransaction($data)
    {
        return $this->transactionRepo->create($data);
    }

    public function updateTransaction($transaction, $data)
    {
        return $this->transactionRepo->update($transaction, $data);
    }

    public function getTransactionDetails($transactionId)
    {
        $transaction = $this->transactionRepo->findByIdWithRelations($transactionId, ['user']);

        return [
            'transaction' => $transaction,
            'users' => $this->transactionRepo->getAllUsers(),
            'typeOptions' => TransactionStatusEnum::asArray(),
        ];
    }

    public function deleteTransaction($transaction)
    {
        $this->transactionRepo->delete($transaction);
    }

    public function manageTransactionApproval($transaction, $approve)
    {
        $status = $approve ? 1 : 0;
        $this->transactionRepo->update($transaction, ['approved' => $status]);
    }
}
