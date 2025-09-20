<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\PhongController as AdminPhongController;
use App\Http\Controllers\Admin\TangController;
use App\Http\Controllers\Admin\ToaNhaController;
use App\Http\Controllers\Client\PhongController as ClientPhongController;
Route::get('/dangnhap', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/themphong', [AdminPhongController::class, 'store']);
Route::post('/themtang', [ TangController::class, 'store']);
Route::post('/themtoanha', [ ToaNhaController::class, 'store']);
Route::get ('/danhsachtoanha', [ ToaNhaController::class, 'index']);

Route::get('/taotaikhoan', [AuthController::class, 'register']);

Route::get('/phong', [ClientPhongController::class, 'index']); // Lấy danh sách phòng
Route::get('/phong/{id}', [ClientPhongController::class, 'show']); // Lấy chi tiết phòng