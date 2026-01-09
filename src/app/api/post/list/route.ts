import { NextRequest } from "next/server";
import { withApiHandler } from "@/utils/withApiHandler";
import { error, success } from "@/utils/apiResponse";
import clientPromise from "@/app/lib/mongadb";
import { DB_NAME } from "@/config/constants";

export const GET = withApiHandler(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const skip = (pageNum - 1) * limitNum;

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection("post");
  const total = await collection.countDocuments();
  const posts = await collection
    .find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNum)
    .toArray();

  return Response.json(
    success({
      posts: posts,
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    }),
    { status: 200 },
  );
});
