<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TienCoc extends Model
{
    use HasFactory;

    protected $table = 'tien_coc';
    protected $fillable = ['hop_dong_id', 'so_tien', 'ngay_nop', 'trang_thai'];

    public function hopDong()
    {
        return $this->belongsTo(HopDong::class, 'hop_dong_id');
    }
}
