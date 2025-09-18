<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenDichVu extends Model
{
    use HasFactory;

    protected $table = 'ten_dich_vu';
    protected $fillable = ['ten_dich_vu', 'gia', 'don_vi'];

    public function hoaDonHangThang()
    {
        return $this->hasMany(HoaDonHangThang::class, 'dich_vu_id');
    }
}
