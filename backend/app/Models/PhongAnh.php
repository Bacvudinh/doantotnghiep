<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhongAnh extends Model
{
    use HasFactory;

    protected $table = 'phong_anh';
    protected $fillable = ['phong_id', 'duong_dan', 'mo_ta', 'la_anh_chinh'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }
}
