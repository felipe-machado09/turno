<?php

namespace App\Http\Requests;

use App\Models\Transaction;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreTransactionRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('transaction_create');
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


    protected function prepareForValidation()
    {
        if (!auth()->user()->is_admin) {
            $this->merge(['user_id' => auth()->id()]);
        } else {
            $this->merge(['user_id' => $this->input('user_id', null)]);
        }
    }
}
