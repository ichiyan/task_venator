<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartyMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'party_id',
        'status'
    ];

    public function party(){
        return $this->belongsTo(Party::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}