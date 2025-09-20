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
        'ngay_bat_dau',
        'ngay_ket_thuc',
        'gia_thue',
        'so_tien_dat_coc',
        'phuong_thuc_dat_coc',
        'trang_thai',
        'ngay_ky',
        'is_gia_han',
        'hop_dong_cha_id',
        'ly_do_huy',
        'nguoi_huy',
        'ngay_huy',
    ];

    protected $casts = [
        'ngay_bat_dau'     => 'date',
        'ngay_ket_thuc'    => 'date',
        'ngay_ky'          => 'date',
        'gia_thue'         => 'decimal:2',
        'so_tien_dat_coc'  => 'decimal:2',
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
