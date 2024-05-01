<?php

namespace App\Http\Requests;

use App\Models\Transaction;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class ManageTransactionRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('transaction_edit');
    }

    public function rules()
    {
        return [
            'transaction_id' => [
                'integer',
                'exists:transactions,id',
                'required',
            ],
            'action' => [
                'required',
                'in:approve,reject'
            ],
        ];
    }
}