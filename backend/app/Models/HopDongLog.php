<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HopDongLog extends Model
{
    use HasFactory;

    protected $table = 'hop_dong_log';
    protected $fillable = [
        'hop_dong_id',
        'trang_thai_cu',
        'trang_thai_moi',
        'ly_do',
        'nguoi_thay_doi',
        'ngay_thay_doi'
    ];

    public function hopDong()
    {
        return $this->belongsTo(HopDong::class, 'hop_dong_id');
    }
}
