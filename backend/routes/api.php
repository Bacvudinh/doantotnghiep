<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PhongController;



Route::get('/dangnhap', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/themphong', [PhongController::class, 'store']);