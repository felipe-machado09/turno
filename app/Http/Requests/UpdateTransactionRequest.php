<?php

namespace App\Http\Requests;

use App\Models\Transaction;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UpdateTransactionRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('transaction_edit');
    }

    public function rules()
    {
        return [
            'user_id' => [
                'integer',
                'exists:users,id',
                'nullable',
            ],
            'type' => [
                'required',
                'in:' . implode(',', Arr::pluck(Transaction::TYPE_SELECT, 'value')),
            ],
            'amount' => [
                'numeric',
                'required',
            ],
            'description' => [
                'string',
                'required',
            ],
            'check_image' => [
                'array',
                'nullable',
            ],
            'check_image.*.id' => [
                'integer',
                'exists:media,id',
            ],
            'approved' => [
                'boolean',
            ],
        ];
    }
}
