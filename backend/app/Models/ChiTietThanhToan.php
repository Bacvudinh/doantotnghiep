<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietThanhToan extends Model
{
    use HasFactory;

    protected $table = 'chi_tiet_thanh_toan';
    protected $fillable = ['hoa_don_id', 'so_tien', 'phuong_thuc_id', 'trang_thai'];

    public function hoaDon()
    {
        return $this->belongsTo(HoaDonHangThang::class, 'hoa_don_id');
    }

    public function phuongThuc()
    {
        return $this->belongsTo(PhuongThucThanhToan::class, 'phuong_thuc_id');
    }
}
