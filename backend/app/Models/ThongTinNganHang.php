<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ThongTinNganHang extends Model
{
    use HasFactory;

    protected $table = 'thong_tin_ngan_hang';
    protected $fillable = ['chu_tai_khoan', 'so_tai_khoan', 'ngan_hang', 'chi_nhanh', 'trang_thai'];
}
