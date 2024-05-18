use std::env;
use dotenv::dotenv;

mod fetch_games;
mod fetch_game_by_id;

fn main() {
    dotenv().ok();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fetch_game_by_id::fetch_game_by_id, fetch_games::fetch_games])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
