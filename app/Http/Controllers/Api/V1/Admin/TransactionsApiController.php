<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Models\User;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Routing\ResponseFactory;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\TransactionResource;
use App\Services\Api\Transaction\TransactionService;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class TransactionsApiController extends Controller
{
    protected $transactionService;

    public function __construct(TransactionService $transactionService)
    {
        $this->transactionService = $transactionService;
    }

    public function index(Request $request): TransactionResource|JsonResource
    {
        abort_if(Gate::denies('transaction_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
    
        $transactions = $this->transactionService->getAllTransactions($request->all());
    
        return TransactionResource::collection($transactions);
    }

    public function store(StoreTransactionRequest $request): JsonResponse
    {
        $transaction = $this->transactionService->storeTransaction($request->validated());
        if ($media = $request->input('check_image', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $transaction->id]);
        }
        return (new TransactionResource($transaction))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('transaction_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'user' => User::get(['id', 'name']),
                'type' => Transaction::TYPE_SELECT,
            ],
        ]);
    }

    public function show($id) : TransactionResource
    {
        abort_if(Gate::denies('transaction_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $transaction = $this->transactionService->getTransactionById($id);

        return new TransactionResource($transaction);
    }

    public function update(UpdateTransactionRequest $request, $id) : JsonResponse
    {
        abort_if(Gate::denies('transaction_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $transaction = $this->transactionService->getTransactionById($id);
        $updatedTransaction = $this->transactionService->updateTransaction($transaction, $request->validated());

        return (new TransactionResource($updatedTransaction))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }


    public function edit(Transaction $transaction)
    {
        abort_if(Gate::denies('transaction_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new TransactionResource($transaction->load(['user'])),
            'meta' => [
                'user' => User::get(['id', 'name']),
                'type' => Transaction::TYPE_SELECT,
            ],
        ]);
    }

    public function destroy($id) : ResponseFactory
    {
        abort_if(Gate::denies('transaction_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $transaction = $this->transactionService->getTransactionById($id);
        $this->transactionService->deleteTransaction($transaction);

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function manage(Request $request)
    {
        abort_if(Gate::none(['transaction_create', 'transaction_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $transaction = $this->transactionService->getTransactionById($request->transaction_id);
        $approve = $request->action == 'approve';
        $this->transactionService->manageTransactionApproval($transaction, $approve);

        return response()->json(['message' => 'Transaction updated'], Response::HTTP_OK);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['transaction_create', 'transaction_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Transaction();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
