<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToaNha extends Model
{
    use HasFactory;

    protected $table = 'toa_nha';
    protected $fillable = ['ten_toa_nha', 'dia_chi', 'so_tang', 'mo_ta'];

    public function tangs()
    {
        return $this->hasMany(Tang::class, 'toa_nha_id');
    }

    public function phongs()
    {
        return $this->hasMany(Phong::class, 'toa_nha_id');
    }
}
