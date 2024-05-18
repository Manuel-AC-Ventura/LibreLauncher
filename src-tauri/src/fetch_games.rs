use reqwest;
use serde::Serialize;
use serde::Deserialize;
use serde_json::Value;
use std::env;

#[derive(Deserialize, Serialize)]
pub struct Game {
    id: u32,
    name: String,
    background_image: String,
}

#[tauri::command]
pub async fn fetch_games() -> Result<Vec<Game>, String>
where
    Result<Vec<Game>, String>: Serialize,
{
    let api_key = env::var("RAWG_API_KEY").expect("RAWG_API_KEY must be set");
    let url = format!("https://api.rawg.io/api/games?key={}", api_key);

    let response = reqwest::get(&url)
        .await
        .map_err(|e| e.to_string())?
        .json::<Value>()
        .await
        .map_err(|e| e.to_string())?;

    let games: Vec<Game> = serde_json::from_value(response["results"].clone())
        .map_err(|e| e.to_string())?;

    Ok(games)
}
