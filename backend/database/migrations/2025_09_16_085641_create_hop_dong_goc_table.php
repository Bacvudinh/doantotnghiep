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
       Schema::create('hop_dong_goc', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hop_dong_id')->constrained('hop_dong')->cascadeOnDelete();
            $table->binary('file_pdf_goc');
            $table->enum('trang_thai', ['cho_ky','da_ky','huy'])->default('cho_ky');
            $table->foreignId('nguoi_tao_id')->nullable()->constrained('tai_khoan_su_dung')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hop_dong_goc');
    }
};
