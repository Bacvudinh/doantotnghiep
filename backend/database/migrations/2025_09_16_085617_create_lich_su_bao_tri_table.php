<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('lich_su_bao_tri', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vat_dung_id')->constrained('quan_ly_vat_dung')->cascadeOnDelete();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->date('ngay_thuc_hien');
            $table->string('loai_cong_viec', 100);
            $table->text('mo_ta_cong_viec')->nullable();
            $table->decimal('chi_phi', 12, 2)->nullable();
            $table->string('nguoi_thuc_hien', 100)->nullable();
            $table->string('tinh_trang_sau_bt', 100)->nullable();
            $table->text('ghi_chu')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lich_su_bao_tri');
    }
};
