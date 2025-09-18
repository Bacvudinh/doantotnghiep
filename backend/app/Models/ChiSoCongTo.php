<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiSoCongTo extends Model
{
    use HasFactory;

    protected $table = 'chi_so_cong_to';
    protected $fillable = ['phong_id', 'chi_so_cu', 'chi_so_moi', 'ngay_ghi'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }
}
