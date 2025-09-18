<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phong extends Model
{
    use HasFactory;

    protected $table = 'phong'; // tên bảng
    protected $fillable = [
        'toa_nha_id',
        'tang_id',
        'ten_phong',
        'dien_tich',
        'gia_thue',
        'so_nguoi_toi_da',
        'tien_nghi',
        'hinh_anh',
        'trang_thai',
    
    ];

    // Quan hệ: 1 phòng thuộc 1 tòa nhà
    public function toaNha()
    {
        return $this->belongsTo(ToaNha::class, 'toa_nha_id');
    }

    // Quan hệ: 1 phòng có nhiều ảnh
    public function anh()
    {
        return $this->hasMany(PhongAnh::class, 'phong_id');
    }

    // Quan hệ: 1 phòng có nhiều hợp đồng
    public function hopDong()
    {
        return $this->hasMany(HopDong::class, 'phong_id');
    }
}
