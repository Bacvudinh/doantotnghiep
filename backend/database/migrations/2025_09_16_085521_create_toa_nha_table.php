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
           Schema::create('toa_nha', function (Blueprint $table) {
            $table->id();
            $table->string('ten_toa_nha', 100);
            $table->string('dia_chi', 200);
            $table->integer('so_tang');
            $table->text('tien_ich')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('toa_nha');
    }
};
