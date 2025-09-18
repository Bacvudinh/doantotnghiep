<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HoaDonCongTo extends Model
{
    use HasFactory;

    protected $table = 'hoa_don_cong_to';
    protected $fillable = ['phong_id', 'chi_so_cu', 'chi_so_moi', 'so_tien', 'ngay_tinh'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }
}
