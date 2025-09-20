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
    // 6. Khuyến mãi
        Schema::create('khuyen_mai', function (Blueprint $table) {
            $table->id();
            $table->string('ma_khuyen_mai', 100)->unique();
            $table->string('mo_ta', 255)->nullable();
            $table->date('ngay_bat_dau');
            $table->date('ngay_ket_thuc');
            $table->decimal('menh_gia', 12, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('khuyen_mai');
    }
};
