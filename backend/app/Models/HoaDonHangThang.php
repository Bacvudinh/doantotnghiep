<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HoaDonHangThang extends Model
{
    use HasFactory;

    protected $table = 'hoa_don_hang_thang';
    protected $fillable = ['phong_id', 'khach_id', 'dich_vu_id', 'so_tien', 'trang_thai', 'ngay_thanh_toan'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }

    public function khach()
    {
        return $this->belongsTo(TaiKhoanSuDung::class, 'khach_id');
    }

    public function dichVu()
    {
        return $this->belongsTo(TenDichVu::class, 'dich_vu_id');
    }
}
