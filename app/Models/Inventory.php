<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Inventory extends Model
{
    use HasFactory;
    protected $table = 'inventories';
    protected $fillable = ['user_id', 'product', 'amount'];

    public function belongsToUser(): HasOne
    {
        return $this->hasOne(User::class);
    }

    public function contains(): HasOne
    {
        return $this->hasOne(Product::class);
    }
}