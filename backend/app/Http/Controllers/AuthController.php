<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TaiKhoanSuDung;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Đăng ký tài khoản
    public function register(Request $request)
    {
        $request->validate([
            'ten_tai_khoan' => 'required|string|unique:tai_khoan_su_dung',
            'mat_khau' => 'required|string|min:6',
            'email' => 'nullable|email',
            'so_dien_thoai' => 'nullable|string|max:10',
        ]);

        $user = TaiKhoanSuDung::create([
            'ten_tai_khoan' => $request->ten_tai_khoan,
            'mat_khau' => Hash::make($request->mat_khau),
            'email' => $request->email,
            'so_dien_thoai' => $request->so_dien_thoai,
            'vai_tro' => 'khách',
        ]);

        return response()->json([
            'message' => 'Đăng ký thành công',
            'user' => $user
        ]);
    }

    // Đăng nhập
    public function login(Request $request)
    {
        $request->validate([
            'ten_tai_khoan' => 'required|string',
            'mat_khau' => 'required|string',
        ]);

        $user = TaiKhoanSuDung::where('ten_tai_khoan', $request->ten_tai_khoan)->first();

        if (!$user || !Hash::check($request->mat_khau, $user->mat_khau)) {
            return response()->json(['message' => 'Sai tài khoản hoặc mật khẩu'], 401);
        }

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json([
            'message' => 'Đăng nhập thành công',
            'user' => $user,
            'token' => $token,
        ]);
    }

    // Đăng xuất
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Đăng xuất thành công']);
    }
}
