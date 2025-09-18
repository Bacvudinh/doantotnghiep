<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ThongBao extends Model
{
    use HasFactory;

    protected $table = 'thong_bao';
    protected $fillable = ['tieu_de', 'noi_dung', 'nguoi_gui', 'nguoi_nhan', 'trang_thai'];
}
