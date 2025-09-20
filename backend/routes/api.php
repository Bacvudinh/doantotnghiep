<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PhongController;
use App\Http\Controllers\Admin\TangController;
use App\Http\Controllers\Admin\ToaNhaController;

use App\Http\Controllers\DatPhongController;

use App\Http\Controllers\AuthController;




Route::get('/dangnhap', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/themphong', [PhongController::class, 'store']);
Route::post('/themtang', [ TangController::class, 'store']);
Route::post('/themtoanha', [ ToaNhaController::class, 'store']);

Route::post('/datphong', [DatPhongController::class, 'store']);


Route::get('/taotaikhoan', [AuthController::class, 'register']);

