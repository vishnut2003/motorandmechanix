import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const BRANDS_API = "https://gomechanic.in/api/v1/get-brands";
const MODELS_API = "https://gomechanic.app/api/v2/oauth/vehicles/get_models_by_brand/?brand_id=";

const DATA_DIR = path.join(process.cwd(), "src", "components", "car-services");
const BRANDS_FILE = path.join(DATA_DIR, "car-brands.json");
const MODELS_FILE = path.join(DATA_DIR, "car-models.json");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");
  const brandId = searchParams.get("brandId");

  try {
    if (action === "brands" || action === "get-brands") {
      if (!fs.existsSync(BRANDS_FILE)) {
        return NextResponse.json({ success: false, error: "Brands file not found", data: [] });
      }
      const brands = JSON.parse(fs.readFileSync(BRANDS_FILE, "utf-8"));
      return NextResponse.json({ success: true, count: brands.length, data: brands });
    }

    if ((action === "models" || action === "get-models") && brandId) {
      if (!fs.existsSync(MODELS_FILE)) {
         return NextResponse.json({ success: false, error: "Models file not found", data: [] });
      }
      
      const existingModels = JSON.parse(fs.readFileSync(MODELS_FILE, "utf-8"));
      const bId = parseInt(brandId);
      const entry = existingModels.find((item: any) => item.brandId === bId);
      
      return NextResponse.json({ success: true, count: entry ? entry.models.length : 0, data: entry ? entry.models : [] });
    }

    return NextResponse.json({ success: false, error: "Invalid action or missing parameters" }, { status: 400 });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
