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
        // 16. Ảnh phòng trong trường phòng có nhiều ảnh (ảnh chính, ảnh phụ)
    Schema::create('phong_anh', function (Blueprint $table) {
    $table->id();
    $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
    $table->string('duong_dan', 255);
    $table->string('mo_ta', 255)->nullable();
    $table->boolean('la_anh_chinh')->default(false);
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phong_anh');
    }
};
