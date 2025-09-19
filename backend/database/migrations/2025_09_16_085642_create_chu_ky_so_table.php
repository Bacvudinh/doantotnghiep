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
       // 15. Chữ ký số
        Schema::create('chu_ky_so', function (Blueprint $table) {
            $table->id();
            $table->foreignId('khach_id')->constrained('tai_khoan_su_dung')->cascadeOnDelete();
            $table->foreignId('hop_dong_id')->constrained('hop_dong')->cascadeOnDelete();
            $table->string('ma_giao_dich', 100)->unique();
            $table->binary('file_chu_ky')->nullable();
            $table->string('chu_ky_so', 255)->nullable();
            $table->string('signed_url', 255)->nullable();
            $table->dateTime('ngay_ky')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chu_ky_so');
    }
};
