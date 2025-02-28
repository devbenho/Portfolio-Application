import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import clientPromise from "@/lib/db";
import { compare } from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("portfolio");
    const users = db.collection("users");

    // First check if it's the admin user from env
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = sign({ email, role: "admin" }, JWT_SECRET, { expiresIn: "1d" });
      console.log(`token: ${token}`);
      const response = new NextResponse(
        JSON.stringify({
          success: true,
          redirectTo: "/dashboard",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response.cookies.set({
        name: "auth-token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 86400,
        path: "/",
      });
      console.log(`response: ${response}`);
      
      return response;
    }

    // If not admin, check database
    const user = await users.findOne({ email });

    if (!user) {
      console.log(`user: ${user}`);
      return new NextResponse(
        JSON.stringify({ error: "Invalid credentials" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Verify password
    const isValid = await compare(password, user.password);

    if (!isValid) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid credentials" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Create JWT token
    const token = sign(
      { email: user.email, role: user.role || "user" },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    const response = new NextResponse(
      JSON.stringify({
        success: true,
        redirectTo: "/dashboard",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    response.cookies.set({
      name: "auth-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
} 