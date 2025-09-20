<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ToaNha;
use Illuminate\Support\Facades\Log;

class ToaNhaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $toaNhas = ToaNha::all();
        return response()->json($toaNhas);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate dữ liệu
        $validatedData = $request->validate([
            'ten_toa_nha' => 'required|string|max:100',
            'dia_chi' => 'nullable|string|max:255',
            'so_tang' => 'nullable|integer',
            'tien_ich' => 'nullable|string',
        ]);

        try {
    $toaNha = ToaNha::create($validatedData);
    return response()->json([
        'message' => 'Thêm tòa nhà thành công',
        'toa_nha' => $toaNha,
    ], 201);
} catch (\Exception $e) {
    Log::error('Lỗi thêm tòa nhà: ' . $e->getMessage() . ' | Data: ' . json_encode($validatedData));
    return response()->json([
        'error' => 'Đã có lỗi xảy ra khi thêm tòa nhà',
        'details' => $e->getMessage()
    ], 500);
}

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $toaNha = ToaNha::find($id);
        if (!$toaNha) {
            return response()->json(['error' => 'Không tìm thấy tòa nhà'], 404);
        }
        return response()->json($toaNha);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $toaNha = ToaNha::find($id);
        if (!$toaNha) {
            return response()->json(['error' => 'Không tìm thấy tòa nhà'], 404);
        }

        $validatedData = $request->validate([
            'ten_toa_nha' => 'required|string|max:100',
            'dia_chi' => 'nullable|string|max:255',
            'so_tang' => 'nullable|integer',
            'tien_ich' => 'nullable|string',
        ]);

        try {
            $toaNha->update($validatedData);
            return response()->json([
                'message' => 'Cập nhật tòa nhà thành công',
                'toa_nha' => $toaNha
            ]);
        } catch (\Exception $e) {
            Log::error('Lỗi cập nhật tòa nhà: ' . $e->getMessage());
            return response()->json([
                'error' => 'Đã có lỗi xảy ra khi cập nhật tòa nhà',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $toaNha = ToaNha::find($id);
        if (!$toaNha) {
            return response()->json(['error' => 'Không tìm thấy tòa nhà'], 404);
        }

        try {
            $toaNha->delete();
            return response()->json(['message' => 'Xóa tòa nhà thành công']);
        } catch (\Exception $e) {
            Log::error('Lỗi xóa tòa nhà: ' . $e->getMessage());
            return response()->json([
                'error' => 'Đã có lỗi xảy ra khi xóa tòa nhà',
                'details' => $e->getMessage()
            ], 500);
        }
    }
}
