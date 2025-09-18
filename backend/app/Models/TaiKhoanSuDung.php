<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaiKhoanSuDung extends Model
{
    use HasFactory;

    protected $table = 'tai_khoan_su_dung';
    protected $fillable = [
        'ten_tai_khoan',
        'mat_khau',
        'email',
        'so_dien_thoai',
        'thong_tin',
        'file_pdf_goc',
        'vai_tro',
        'trang_thai'
    ];

    // 1 khách có nhiều hợp đồng
    public function hopDongs()
    {
        return $this->hasMany(HopDong::class, 'khach_id');
    }
}
