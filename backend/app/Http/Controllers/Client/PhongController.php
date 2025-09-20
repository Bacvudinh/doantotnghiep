<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Phong;

class PhongController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
           try {
            $rooms = Phong::all(); // Lấy tất cả các phòng từ database

            return response()->json([
                'status' => true,
                'message' => 'Lấy danh sách phòng thành công',
                'data' => $rooms
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         try {
            $room = Phong::find($id); // Tìm phòng theo ID

            if (!$room) {
                return response()->json([
                    'status' => false,
                    'message' => 'Không tìm thấy phòng'
                ], 404);
            }

            return response()->json([
                'status' => true,
                'message' => 'Lấy thông tin phòng thành công',
                'data' => $room
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
