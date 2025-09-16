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
        Schema::create('su_co', function (Blueprint $table) {
                 Schema::create('su_co', function (Blueprint $table) {
            $table->id();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->text('mo_ta');
            $table->date('ngay_bao');
            $table->date('ngay_xu_ly')->nullable();
            $table->date('han_xu_ly')->nullable();
            $table->decimal('chi_phi', 12, 2)->nullable();
            $table->enum('trang_thai', ['dangxl','hoanthanh'])->default('dangxl');
            $table->string('trang_thai_su_co', 200)->nullable();
            $table->timestamps();
        });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('su_co');
    }
};
