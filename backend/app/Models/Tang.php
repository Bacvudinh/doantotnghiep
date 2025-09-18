<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tang extends Model
{
    use HasFactory;

    protected $table = 'tang';
    protected $fillable = ['toa_nha_id', 'ten_tang', 'so_phong'];

    public function toaNha()
    {
        return $this->belongsTo(ToaNha::class, 'toa_nha_id');
    }

    public function phongs()
    {
        return $this->hasMany(Phong::class, 'tang_id');
    }
}
