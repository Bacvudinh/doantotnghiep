<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HopDongGoc extends Model
{
    use HasFactory;

    protected $table = 'hop_dong_goc';
    protected $fillable = ['hop_dong_id', 'file_pdf_goc', 'trang_thai', 'nguoi_tao'];

    public function hopDong()
    {
        return $this->belongsTo(HopDong::class, 'hop_dong_id');
    }

    public function nguoiTao()
    {
        return $this->belongsTo(TaiKhoanSuDung::class, 'nguoi_tao');
    }
}
