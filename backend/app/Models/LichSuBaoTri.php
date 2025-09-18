<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LichSuBaoTri extends Model
{
    use HasFactory;

    protected $table = 'lich_su_bao_tri';
    protected $fillable = ['phong_id', 'noi_dung', 'chi_phi', 'ngay_bao_tri', 'trang_thai'];

    public function phong()
    {
        return $this->belongsTo(Phong::class, 'phong_id');
    }
}
