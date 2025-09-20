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
            'ngay_bat_dau'   => 'required|date|after_or_equal:today',
            'ngay_ket_thuc'  => 'required|date|after:ngay_bat_dau',
            'so_tien_dat_coc' => 'nullable|numeric',
            'phuong_thuc_dat_coc' => 'nullable|in:online,tienmat',
        ]);

        DB::beginTransaction();
        try {
            // 1. Lấy phòng
            $phong = Phong::findOrFail($validated['phong_id']);

            if ($phong->trang_thai !== 'trong') {
                return response()->json([
                    'status' => false,
                    'message' => 'Phòng không còn trống'
                ], 400);
            }

            // 2. Tạo hợp đồng
            $hopDong = HopDong::create([
                'phong_id'          => $validated['phong_id'],
                'khach_id'          => $validated['khach_id'],
                'ngay_bat_dau'      => $validated['ngay_bat_dau'],
                'ngay_ket_thuc'     => $validated['ngay_ket_thuc'],
                'gia_thue'          => $phong->gia_thue,
                'so_tien_dat_coc'   => $validated['so_tien_dat_coc'] ?? null,
                'phuong_thuc_dat_coc' => $validated['phuong_thuc_dat_coc'] ?? null,
                'trang_thai'        => 'khoitao',
            ]);

            // 3. Cập nhật trạng thái phòng → đang chờ
            $phong->update(['trang_thai' => 'dangcho']);

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
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }
}
