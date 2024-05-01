<?php

namespace App\Models;

use DateTimeInterface;
use Spatie\MediaLibrary\HasMedia;
use App\Support\HasAdvancedFilter;
use App\Enums\TransactionStatusEnum;
use App\Observers\TransactionObserver;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Transaction extends Model implements HasMedia
{
    use HasAdvancedFilter, SoftDeletes, InteractsWithMedia, HasFactory;

    protected static function boot()
    {
        parent::boot();    
        static::observe(new TransactionObserver());
    }

    public $table = 'transactions';

    protected $casts = [
        'approved' => 'boolean',
        'done'     => 'boolean',
    ];

    protected $appends = [
        'type_label',
        'check_image',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'user.name',
        'type',
        'amount',
        'description',
    ];

    protected $orderable = [
        'id',
        'user.name',
        'type',
        'amount',
        'description',
        'approved',
    ];

    protected $fillable = [
        'user_id',
        'type',
        'amount',
        'description',
        'approved',
        'done',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public const TYPE_SELECT = [
        [
            'label' => 'Deposit',
            'value' => 'deposit',
        ],
        [
            'label' => 'Purchase',
            'value' => 'purchase',
        ],
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $thumbnailWidth  = 50;
        $thumbnailHeight = 50;

        $thumbnailPreviewWidth  = 120;
        $thumbnailPreviewHeight = 120;

        $this->addMediaConversion('thumbnail')
            ->width($thumbnailWidth)
            ->height($thumbnailHeight)
            ->fit('crop', $thumbnailWidth, $thumbnailHeight);
        $this->addMediaConversion('preview_thumbnail')
            ->width($thumbnailPreviewWidth)
            ->height($thumbnailPreviewHeight)
            ->fit('crop', $thumbnailPreviewWidth, $thumbnailPreviewHeight);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getTypeLabelAttribute()
    {
        return TransactionStatusEnum::from($this->type)->label();
    }

    public function scopeIsPurchase($query)
    {
        return $query->where('type', TransactionStatusEnum::PURCHASE);
    }

    public function scopeIsDeposit($query)
    {
        return $query->where('type', TransactionStatusEnum::DEPOSIT);
    }

    public function scopeNotApproved($query)
    {
        return $query->where('approved', false);
    }

    public function scopeApproved($query)
    {
        return $query->where('approved', true);
    }

    public function scopeFilter($query, array $filter)
    {
        if (isset($filter['s']) && in_array('type', $this->filterable)) {
            $query->where('type', $filter['s']);
        }
    
        if (isset($filter['sort']) && in_array($filter['sort'], $this->orderable)) {
            $order = $filter['order'] ?? 'asc';
            $query->orderBy($filter['sort'], $order);
        }
    
        return $query;
    }

    public function getCheckImageAttribute()
    {
        return $this->getMedia('transaction_check_image')->map(function ($item) {
            $media                      = $item->toArray();
            $media['url']               = $item->getUrl();
            $media['thumbnail']         = $item->getUrl('thumbnail');
            $media['preview_thumbnail'] = $item->getUrl('preview_thumbnail');

            return $media;
        });
    }
}
