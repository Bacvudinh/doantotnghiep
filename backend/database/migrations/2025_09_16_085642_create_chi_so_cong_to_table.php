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
       Schema::create('chi_so_cong_to', function (Blueprint $table) {
            $table->id();
            $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
            $table->foreignId('dich_vu_id')->constrained('ten_dich_vu')->cascadeOnDelete();
            $table->string('ky', 20);
            $table->integer('chi_so');
            $table->dateTime('ngay_tao')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->foreignId('nguoi_nhap_id')->nullable()->constrained('tai_khoan_su_dung')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chi_so_cong_to');
    }
};
