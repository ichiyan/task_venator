<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\PrivateMessageEvent;

class MessageController extends Controller
{

    //Test private chat function
    public function getParticipants(){
        //test private chat with any user
        $users = User::where('id', '!=', Auth::id())->get();
        //test private with user hose id=2
        $chat_user_info = User::findOrFail(2);
        $auth_user_info = User::find(Auth::id());


        return response()->json([
            'status'=>200,
            'users'=>$users,
            'chat_user_info'=>$chat_user_info,
            'auth_user_info'=>$auth_user_info,
        ]);

    }

    //Test private chat function
    public function sendMessage(Request $request){
        $request->validate([
            'message' => 'required',
            'receiver_id' => 'required',
        ]);

        $sender_id = Auth::id();
        $receiver_id = $request->receiver_id;

        $message = new Message();
        $message->message = $request->message;

        if ($message->save()) {
            try {
                $message->users()->attach($sender_id, ['receiver_id' => $receiver_id]);
                $sender = User::where('id', '=', $sender_id)->first();

                $data = [];

                $data['sender_id'] = $sender_id;
                $data['sender_name'] = $sender->name;
                $data['receiver_id'] = $receiver_id;
                $data['content'] = $message->message;
                $data['created_at'] = $message->created_at;
                $data['message_id'] = $message->id;

                event(new PrivateMessageEvent($data));

                return response()->json([
                    'status' => 200,
                    'data' => $data,
                    'message' => 'Message sent successfully',
                ]);

            } catch (Exception $e){
                $message->delete();
            }

        }
    }

    public function getChatInfo() {

    }


}