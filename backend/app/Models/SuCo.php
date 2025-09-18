<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuCo extends Model
{
    use HasFactory;

    protected $table = 'su_co';
    protected $fillable = ['phong_id', 'mo_ta', 'chi_phi', 'trang_thai'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }
}
