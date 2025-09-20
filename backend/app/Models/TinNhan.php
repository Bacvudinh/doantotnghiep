<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TinNhan extends Model
{
    use HasFactory;

    protected $table = 'tin_nhan';
    protected $fillable = ['nguoi_gui', 'nguoi_nhan', 'noi_dung', 'trang_thai'];
}
