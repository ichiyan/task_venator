<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Inventory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InventoryController extends Controller
{
    public function index(Request $request){
        // $items=Inventory::all();
        $user_id= Auth::id();
        // $items=User::with('getItems')->where('id','=', $user_id)->get();
        // $items= Inventory::with('contains')->where('user_id', '=', $user_id)->get();
        $item= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('outfit','outfit.id','=','products.outfit')
                ->where('outfit.outfit_type','=', "Armor")
                ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
                ->get(['outfit.*','outfit_info.*' ,'inventories.user_id AS inventUserId']);
        $weapon= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('outfit','outfit.id','=','products.outfit')
                ->where('outfit.outfit_type','=', "Weapon")
                ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
                ->get(['outfit.*','outfit_info.*' ,'inventories.user_id AS inventUserId']);
         

        $potion= DB::table('inventories')
                ->join('users', 'users.id', '=', 'inventories.user_id')
                ->join('products', 'products.id', '=', 'inventories.product')
                ->join('potion','potion.id','=','products.potion')
                ->select('potion.*', 'inventories.user_id AS inventUserId' )
                ->get();
        
    //     $weapon= DB::table('products')
    //             ->join('outfit', 'outfit.id', '=', 'products.outfit')
    //             ->where('outfit.outfit_type','=', "Weapon")
    //             ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
    //             ->get(['outfit.*', 'outfit_info.*', 'products.id AS product_id']);

    //    $armor= DB::table('products')
    //            ->join('outfit', 'outfit.id', '=', 'products.outfit')
    //            ->where('outfit.outfit_type','=', "Armor")
    //            ->join('outfit_info', 'outfit_info.id', '=', 'outfit.outfit_infos')
    //            ->get(['outfit.*', 'outfit_info.*', 'products.id AS product_id']);
        return response()->json([
            'message' => "inventory success",
            'status'=>200,
            'weapon' => $weapon,
            'item' => $item,
            'potion' => $potion,
            'auth_id'=> $user_id,
            
           
            
            
      
        ]);
    }
   
    public function store(Request $request){
        
        $inventory= new Inventory;
        $user_id = Auth::id();
        $inventory->user_id= $user_id;
        $inventory->product= $request->input('product');
        $inventory->amount=$request->input('amount');

        $inventory->save();

        

        return response()->json([
            'text' => "testing success",
          
            'user' =>$user_id,
            'amount' => $request->input('amount'),
            'product' => $request->input(),
 
      
        ]);
    }
}