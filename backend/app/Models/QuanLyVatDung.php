<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuanLyVatDung extends Model
{
    use HasFactory;

    protected $table = 'quan_ly_vat_dung';
    protected $fillable = ['phong_id', 'ten_vat_dung', 'so_luong', 'tinh_trang', 'mo_ta', 'hinh_anh'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }
}
