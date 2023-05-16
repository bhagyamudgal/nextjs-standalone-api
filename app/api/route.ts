import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const data = req.nextUrl.searchParams.get("data");

    return NextResponse.json({ message: data || "API is working!" });
}

export async function OPTIONS() {
    return NextResponse.json({ message: "OPTIONS" }, { status: 200 });
}
