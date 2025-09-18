<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChuKySo extends Model
{
    use HasFactory;

    protected $table = 'chu_ky_so';
    protected $fillable = ['khach_id', 'hop_dong_id', 'ma_giao_dich', 'chu_ky_file', 'chu_ky_so', 'signed_url', 'ngay_ky'];

    public function hopDong()
    {
        return $this->belongsTo(HopDong::class, 'hop_dong_id');
    }

    public function khach()
    {
        return $this->belongsTo(TaiKhoanSuDung::class, 'khach_id');
    }
}
