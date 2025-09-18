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
     Schema::create('tien_coc', function (Blueprint $table) {
            $table->id();
            $table->decimal('so_tien', 12, 2);
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->foreignId('toa_nha_id')->constrained('toa_nha')->cascadeOnDelete();
            $table->foreignId('khach_id')->constrained('tai_khoan_su_dung')->cascadeOnDelete();
            $table->date('ngay_coc');
            $table->foreignId('tang_id')->nullable()->constrained('tang')->nullOnDelete();
            $table->string('so_tai_khoan', 20)->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tien_coc');
    }
};
