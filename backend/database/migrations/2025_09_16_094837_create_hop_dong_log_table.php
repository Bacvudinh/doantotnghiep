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
      Schema::create('hop_dong_log', function (Blueprint $table) {
        // Lóg hợp đồng đây là lịch sử thay đổi trạng thái hợp đồng
            $table->id();
            $table->foreignId('hop_dong_id')
                  ->constrained('hop_dong')
                  ->cascadeOnDelete(); // Xóa log khi hợp đồng bị xóa

            $table->enum('trang_thai_cu', [
                'khoitao','choky','daky','hieuluc','dathanhly','bihuy','tuchoi'
            ]);

            $table->enum('trang_thai_moi', [
                'khoitao','choky','daky','hieuluc','dathanhly','bihuy','tuchoi'
            ]);

            $table->text('ly_do')->nullable();           // Lý do hủy hoặc thay đổi trạng thái
            $table->enum('nguoi_thay_doi', ['khach','admin','hethong'])->nullable();
            $table->dateTime('ngay_thay_doi')->default(now());
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hop_dong_log');
    }
};
