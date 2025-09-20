<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HopDong;
use App\Models\Phong;
use Illuminate\Support\Facades\DB;

class DatPhongController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'phong_id'       => 'required|exists:phong,id',
            'khach_id'       => 'required|exists:tai_khoan_su_dung,id',
            'ho_ten'         => 'required|string|max:100',
            'ngay_bat_dau'   => 'required|date|after_or_equal:today',
            'ngay_ket_thuc'  => 'required|date|after:ngay_bat_dau',
            'so_dien_thoai'  => 'required|string|max:15',
            'email'          => 'nullable|email',
            'dia_chi'        => 'nullable|string',
            'cccd'           => 'nullable|string|max:12',
            'gia_thue'       => 'nullable|numeric',
            'phuong_thuc_dat_coc' => 'nullable|in:online,tienmat',
            'so_tien_dat_coc'     => 'nullable|numeric',
        ]);

        DB::beginTransaction();
        try {
            // Check phòng có còn trống không
            $phong = Phong::find($validated['phong_id']);
            if ($phong->trang_thai !== 'trong') {
                return response()->json([
                    'status' => false,
                    'message' => 'Phòng không còn trống'
                ], 400);
            }

            // Tạo hợp đồng
            $hopDong = HopDong::create([
                'phong_id'       => $validated['phong_id'],
                'khach_id'       => $validated['khach_id'],
                'ho_ten'         => $validated['ho_ten'],
                'ngay_bat_dau'   => $validated['ngay_bat_dau'],
                'ngay_ket_thuc'  => $validated['ngay_ket_thuc'],
                'gia_thue'       => $validated['gia_thue'] ?? $phong->gia_thue,
                'so_dien_thoai'  => $validated['so_dien_thoai'],
                'email'          => $validated['email'] ?? null,
                'dia_chi_thuong_tru' => $validated['dia_chi'] ?? null,
                'cccd'           => $validated['cccd'] ?? null,
                'phuong_thuc_dat_coc' => $validated['phuong_thuc_dat_coc'] ?? null,
                'so_tien_dat_coc'     => $validated['so_tien_dat_coc'] ?? null,
                'trang_thai'     => 'khoitao',
            ]);

            // Update trạng thái phòng thành "đangthue"
            $phong->update(['trang_thai' => 'dangthue']);

            DB::commit();
            return response()->json([
                'status' => true,
                'message' => 'Đặt phòng thành công',
                'data' => $hopDong
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra: '.$e->getMessage()
            ], 500);
        }
    }
}
