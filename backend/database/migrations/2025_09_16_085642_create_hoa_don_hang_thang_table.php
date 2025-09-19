<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB; // <- Import này cần có

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
     Schema::create('hoa_don_hang_thang', function (Blueprint $table) {
            $table->id();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->foreignId('khach_id')->constrained('tai_khoan_su_dung')->cascadeOnDelete();
            $table->foreignId('dich_vu_id')->constrained('ten_dich_vu')->cascadeOnDelete();
            $table->date('ngay_thanh_toan');
            $table->decimal('tong_tien', 12, 2);
            $table->enum('trang_thai_thanh_toan', ['chuatra','datra','quahan'])->default('chuatra');
            $table->foreignId('toa_nha_id')->nullable()->constrained('toa_nha')->nullOnDelete();
            $table->foreignId('tang_id')->nullable()->constrained('tang')->nullOnDelete();
            $table->foreignId('khuyen_mai_id')->nullable()->constrained('khuyen_mai')->nullOnDelete();
            $table->timestamps();
        });

        

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hoa_don_hang_thang');
    }
};
