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
      Schema::create('tai_khoan_su_dung', function (Blueprint $table) {
      
            $table->string('ten_tai_khoan', 50)->unique();
            $table->string('mat_khau', 100);
            $table->string('email', 100)->nullable();
            $table->string('so_dien_thoai', 10)->nullable();
            $table->text('thong_tin')->nullable();
            $table->binary('file_pdf_goc')->nullable();
            $table->enum('vai_tro', ['Quản trị viên','khách','Nhân viên'])->default('Khách');
            $table->boolean('trang_thai')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tai_khoan_su_dung');
        
    }
};