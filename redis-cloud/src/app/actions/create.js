"use server";

import { redirect } from "next/navigation";
import { client } from "../lib/db";

export async function createBook(formData) {
    const { title, rating, author, blurb } = Object.fromEntries(formData);

    const id = Math.floor(Math.random() * 100000);

    // add the book to the sorted set
    const uniqueBook = await client.zAdd(
        "books",
        {
            value: title,
            score: id,
        },
        { NX: true }
    );

    if (!uniqueBook) {
        return { error: "This book has already been added." };
    }

    await client.hSet(`books:${id}`, { title, rating, author, blurb });

    redirect("/");
}
