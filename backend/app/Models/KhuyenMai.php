<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhuyenMai extends Model
{
    use HasFactory;

    protected $table = 'khuyen_mai';
    protected $fillable = ['ten', 'ma', 'gia_tri', 'ngay_bat_dau', 'ngay_ket_thuc', 'trang_thai'];
}
