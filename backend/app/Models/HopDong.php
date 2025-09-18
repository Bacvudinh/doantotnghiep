<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HopDong extends Model
{
    use HasFactory;

    protected $table = 'hop_dong';
    protected $fillable = [
        'phong_id',
        'khach_id',
        'ho_ten',
        'ngay_bat_dau',
        'ngay_ket_thuc',
        'gia_thue',
        'tinh_trang_phong',
        'dich_vu',
        'dieu_khoan',
        'cccd',
        'ngay_sinh',
        'so_dien_thoai',
        'email',
        'dia_chi_thuong_tru',
        'link_hop_dong_pdf',
        'hinh_thuc_ky',
        'ky_thanh_toan',
        'ngay_ky',
        'is_gia_han',
        'hop_dong_cha_id',
        'ly_do_huy',
        'nguoi_huy',
        'ngay_huy',
        'trang_thai',
        'so_tien_dat_coc',
        'phuong_thuc_dat_coc'
    ];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }

    public function khach()
    {
        return $this->belongsTo(TaiKhoanSuDung::class, 'khach_id');
    }
}
