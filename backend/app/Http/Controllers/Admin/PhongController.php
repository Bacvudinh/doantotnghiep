<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Phong;
use Illuminate\Support\Facades\Log;
use App\Models\PhongAnh;

class PhongController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'toa_nha_id' => 'required|exists:toa_nha,id',
            'tang_id' => 'nullable|exists:tang,id',
            'ten_phong' => 'required|string|max:50',
            'dien_tich' => 'required|numeric',
            'gia_thue' => 'required|numeric',
            'so_nguoi_toi_da' => 'required|integer',
            'tien_nghi' => 'nullable|string',
            'hinh_anh_chinh' => 'nullable|string|max:255',
            'anh_phu' => 'nullable|array',
            'anh_phu.*' => 'string|max:255',
            //      'hinh_anh_chinh' => 'nullable|image|mimes:jpg,png|max:2048',
            // 'anh_phu' => 'nullable|array', // khai báo phải là mảng
            // 'anh_phu.*' => 'image|mimes:jpg,png|max:2048', // từng ảnh con
// ẩn mấy cái màu xanh vì ko upload file mà lưu đường dẫn thôi và để test api, nếu k thì phải upload file lên server rồi lấy đường dẫn lưu vào db, nếu có upload file thì bỏ mấy cái màu xanh kia đi
        ]);
        $hinhAnhChinh = $request->hinh_anh_chinh ?? null;
        // 1. Upload ảnh chính (nếu có)
        // $hinhAnhChinh = null;
        // if ($request->hasFile('hinh_anh_chinh')) {
        //     $hinhAnhChinh = $request->file('hinh_anh_chinh')->store('uploads/phong', 'public');
        // }
        // 2. Tạo phòng
        $phong = Phong::create([
            'toa_nha_id' => $request->toa_nha_id,
            'tang_id' => $request->tang_id,
            'ten_phong' => $request->ten_phong,
            'dien_tich' => $request->dien_tich,
            'gia_thue' => $request->gia_thue,
            'so_nguoi_toi_da' => $request->so_nguoi_toi_da,
            'tien_nghi' => $request->tien_nghi,
            'hinh_anh' => $hinhAnhChinh, // ảnh chính
            'trang_thai' => $request->trang_thai ?? 'trong',

        ]);
        //4 Lưu ảnh chính vào bảng phong_anh (la_anh_chinh = true)
        // Lưu ảnh chính
        if ($hinhAnhChinh) {
            PhongAnh::create([
                'phong_id' => $phong->id,
                'duong_dan' => $hinhAnhChinh,
                'la_anh_chinh' => true,
            ]);
        }

        // Lưu ảnh phụ
        if ($request->anh_phu) {
            foreach ($request->anh_phu as $path) {
                PhongAnh::create([
                    'phong_id' => $phong->id,
                    'duong_dan' => $path,
                    'la_anh_chinh' => false,
                ]);
            }
        }


        Log::debug('Phòng đã được tạo:', $phong->toArray());
        return response()->json([
            'message' => 'Tạo phòng thành công',
            'phong' => $phong->load('anh'),
        ]);
    }
}
