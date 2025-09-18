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
        Schema::create('hop_dong', function (Blueprint $table) {
  
    $table->id();
    $table->foreignId('phong_id')->constrained('phong')->cascadeOnDelete();
    $table->foreignId('khach_id')->constrained('tai_khoan_su_dung')->cascadeOnDelete();
    $table->string('ho_ten', 100);
    $table->date('ngay_bat_dau');
    $table->date('ngay_ket_thuc');
    $table->decimal('gia_thue', 12, 2);
    $table->string('tinh_trang_phong', 100)->nullable();
    $table->string('dich_vu', 300)->nullable();
    $table->string('dieu_khoan', 200)->nullable();
    $table->string('cccd', 12)->nullable();
    $table->date('ngay_sinh')->nullable();
    $table->string('so_dien_thoai', 15)->nullable();
    $table->string('email', 100)->nullable();
    $table->string('dia_chi_thuong_tru', 300)->nullable();

    // Bỏ cột diem_tin_cay
    // $table->decimal('diem_tin_cay', 3, 1)->nullable();

    // Các cột mới bổ sung
    $table->string('link_hop_dong_pdf')->nullable(); // Lưu file PDF hợp đồng
    $table->enum('hinh_thuc_ky', ['offline','online'])->default('offline'); // Hình thức ký hợp đồng
    $table->enum('ky_thanh_toan', ['1_thang','3_thang','6_thang','12_thang'])->default('1_thang'); // Kỳ thanh toán
    $table->date('ngay_ky')->nullable(); // Ngày ký hợp đồng
    $table->boolean('is_gia_han')->default(false); // Hợp đồng gia hạn hay không
    $table->foreignId('hop_dong_cha_id')->nullable()->constrained('hop_dong')->nullOnDelete(); // Liên kết hợp đồng cha

    $table->text('ly_do_huy')->nullable();
    $table->enum('nguoi_huy', ['khach','admin','hethong'])->nullable();
    $table->date('ngay_huy')->nullable();
    $table->enum('trang_thai', ['khoitao','choky','daky','hieuluc','dathanhly','bihuy','tuchoi'])->default('khoitao');
    $table->decimal('so_tien_dat_coc', 12, 2)->nullable();
    $table->enum('phuong_thuc_dat_coc', ['online','tienmat'])->nullable();
    $table->timestamps();
});

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hop_dong');
    }
};
