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
     Schema::create('chi_tiet_thanh_toan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pttt_id')->constrained('phuong_thuc_thanh_toan')->cascadeOnDelete();
            $table->foreignId('thong_tin_ngan_hang_id')->constrained('thong_tin_ngan_hang')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chi_tiet_thanh_toan');
    }
};
