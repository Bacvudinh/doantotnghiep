<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhuongThucThanhToan extends Model
{
    use HasFactory;

    protected $table = 'phuong_thuc_thanh_toan';
    protected $fillable = ['ten_phuong_thuc', 'mo_ta'];

    public function chiTietThanhToans()
    {
        return $this->hasMany(ChiTietThanhToan::class, 'phuong_thuc_id');
    }
}
