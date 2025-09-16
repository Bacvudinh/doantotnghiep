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
          // 7. Phòng
        Schema::create('phong', function (Blueprint $table) {
            $table->id();
            $table->foreignId('toa_nha_id')->constrained('toa_nha')->cascadeOnDelete();
            $table->string('ten_phong', 50);
            $table->decimal('dien_tich', 5, 2);
            $table->decimal('gia_thue', 12, 2);
            $table->integer('so_nguoi_toi_da');
            $table->text('tien_nghi')->nullable();
            $table->foreignId('tang_id')->nullable()->constrained('tang')->nullOnDelete();
            $table->text('hinh_anh')->nullable();
            $table->enum('trang_thai', ['trong','dangthue','baotri'])->default('trong');
            $table->binary('anh3d')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phong');
    }
};
