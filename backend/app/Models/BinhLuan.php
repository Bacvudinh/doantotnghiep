<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BinhLuan extends Model
{
    use HasFactory;

    protected $table = 'binh_luan';
    protected $fillable = ['khach_id', 'noi_dung', 'danh_gia', 'phong_id'];

    public function khach()
    {
        return $this->belongsTo(TaiKhoanSuDung::class, 'khach_id');
    }

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }
}
