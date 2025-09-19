<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB; // <- Import này cần có

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('hoa_don_cong_to', function (Blueprint $table) {
            $table->id();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->foreignId('dich_vu_id')->constrained('ten_dich_vu')->cascadeOnDelete();
            $table->string('ky', 20);
            $table->integer('chi_so_truoc');
            $table->integer('chi_so_hien_tai');
            $table->integer('tieu_thu');
            $table->decimal('don_gia', 10, 2);
            $table->decimal('thanh_tien', 12, 2);
            $table->dateTime('ngay_tao')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->unsignedBigInteger('nguoi_tao')->nullable();
            $table->foreignId('chi_so_cong_to_id')->constrained('chi_so_cong_to')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hoa_don_cong_to');
    }
};
