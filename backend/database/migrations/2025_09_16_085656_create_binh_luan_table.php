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
        Schema::create('binh_luan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->foreignId('khach_id')->constrained('tai_khoan_su_dung')->cascadeOnDelete();
            $table->text('noi_dung');
            $table->decimal('diem_danh_gia', 3, 1)->nullable();
            $table->dateTime('ngay_tao')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->foreignId('binh_luan_cha_id')->nullable()->constrained('binh_luan')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('binh_luan');
    }
};
