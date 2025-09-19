<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ClientMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
   public function handle(Request $request, Closure $next)
    {
        if ($request->user() && $request->user()->vai_tro === 'khách') {
            return $next($request);
        }

        return response()->json(['message' => 'Chỉ khách hàng mới được phép'], 403);
    }
}
