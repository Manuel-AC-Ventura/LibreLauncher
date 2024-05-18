use reqwest;
use serde::{Deserialize, Serialize};
use std::env;

#[derive(Deserialize, Serialize)]
pub struct GameDetail {
    id: Option<u32>,
    name: String,
    description: String,
    released: String,
    updated: String,
    background_image: String,
    publishers: Vec<Publisher>,
    platforms: Vec<Platform>,
}

#[derive(Deserialize, Serialize)]
pub struct Publisher {
    name: String,
}

#[derive(Deserialize, Serialize)]
pub struct Platform {
    platform: PlatformDetail,
    requirements: Option<Requirements>,
}

#[derive(Deserialize, Serialize)]
pub struct PlatformDetail {
    id: u32,
    name: String,
    slug: String,
}

#[derive(Deserialize, Serialize, Clone)]
pub struct Requirements {
    minimum: Option<String>,
    recommended: Option<String>,
}

impl GameDetail {
    // Método para obter os requisitos da plataforma PC
    pub fn get_pc_requirements(&self) -> Option<Requirements> {
        self.platforms.iter()
            .find(|&p| p.platform.slug == "pc")
            .and_then(|p| p.requirements.clone())
    }
}

#[tauri::command]
pub async fn fetch_game_by_id(game_id: u32) -> Result<GameDetail, String> {
    let api_key = env::var("RAWG_API_KEY").expect("RAWG_API_KEY must be set");
    let url = format!("https://api.rawg.io/api/games/{}?key={}", game_id, api_key);

    let response = match reqwest::get(&url).await {
        Ok(response) => response,
        Err(e) => {
            eprintln!("Failed to fetch game: {}", e);
            return Err(e.to_string());
        }
    };

    let mut game_detail = match response.json::<GameDetail>().await {
        Ok(game_detail) => game_detail,
        Err(e) => {
            eprintln!("Failed to parse game detail: {}", e);
            return Err(e.to_string());
        }
    };

    // Filtrar apenas os requisitos da plataforma PC
    if let Some(pc_requirements) = game_detail.get_pc_requirements() {
        game_detail.platforms = vec![Platform {
            platform: PlatformDetail {
                id: 4, // id padrão para PC
                name: "PC".to_string(),
                slug: "pc".to_string(),
            },
            requirements: Some(pc_requirements),
        }];
    }

    Ok(game_detail)
}
