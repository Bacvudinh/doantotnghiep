<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DatLichXemPhong extends Model
{
    use HasFactory;

    protected $table = 'dat_lich_xem_phong';
    protected $fillable = ['phong_id', 'khach_id', 'ngay_dat', 'gio_dat', 'trang_thai'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }

    public function khach()
    {
        return $this->belongsTo(TaiKhoanSuDung::class, 'khach_id');
    }
}
