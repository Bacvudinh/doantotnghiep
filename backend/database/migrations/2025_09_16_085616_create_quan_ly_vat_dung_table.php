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
           Schema::create('quan_ly_vat_dung', function (Blueprint $table) {
            $table->id();
            $table->string('ten_vat_dung', 100);
            $table->integer('so_luong');
            $table->enum('tinh_trang', ['tot','hongnhe','hongnang','dangbt'])->default('tot');
            $table->text('mo_ta')->nullable();
            $table->string('hinh_anh')->nullable();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quan_ly_vat_dung');
    }
};
