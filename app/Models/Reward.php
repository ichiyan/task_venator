<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Reward extends Model
{
    use HasFactory;
    protected $table='rewards';
    protected $fillable = ['image', 'name'];

    public function bestowedIn(): HasMany
    {
        return $this->hasMany(BattleReward::class);
    }
}