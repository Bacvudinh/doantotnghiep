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
       Schema::create('tin_nhan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('khach_id')->constrained('tai_khoan_su_dung')->cascadeOnDelete();
            $table->text('noi_dung');
            $table->dateTime('ngay_gui')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->dateTime('ngay_tra_loi')->nullable();
            $table->text('noi_dung_tra_loi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tin_nhan');
    }
};
