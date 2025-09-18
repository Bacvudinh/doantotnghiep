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
         Schema::create('thong_tin_ngan_hang', function (Blueprint $table) {
            $table->id();
            $table->string('ten_ngan_hang', 100);
            $table->string('stk', 20);
            $table->foreignId('pttt_id')->constrained('phuong_thuc_thanh_toan')->cascadeOnDelete();
            $table->string('hinh_anh_qr', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thong_tin_ngan_hang');
    }
};
