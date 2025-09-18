<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhieuNai extends Model
{
    use HasFactory;

    protected $table = 'khieu_nai';
    protected $fillable = ['khach_id', 'noi_dung', 'trang_thai', 'phan_hoi'];

    public function khach()
    {
        return $this->belongsTo(TaiKhoanSuDung::class, 'khach_id');
    }
}
