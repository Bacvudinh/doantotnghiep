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
          Schema::create('dat_lich_xem_phong', function (Blueprint $table) {
            $table->id();
            $table->string('ten', 100);
            $table->string('so_dien_thoai', 15);
            $table->date('ngay_hen');
            $table->enum('trang_thai', ['cho','daxem','huy'])->default('cho');
            $table->foreignId('toa_nha_id')->constrained('toa_nha')->cascadeOnDelete();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dat_lich_xem_phong');
    }
};
