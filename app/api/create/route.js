import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "8yuh34zvk8tf";
const api_secret = "qresc7ujcycqqb8r7h5wkqj2a3w9gby5sjg7myu9m8fqxn7dv8hct949jthgx3pp";


export async function POST(request) {
    function toTitleCase(str) {
        return str
            .replace(/[-_]/g, " ") // replace - and _ with spaces
            .split(" ") // split into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize
            .join(" "); // join back
    }
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED", token);
    const client = await clerkClient()

    await serverClient.upsertUser({
        id: user.data.id
    })

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })

    const slugs = [
        "python-new",
        "javascript-new",
        "nextjs",
        "react-new",
        "web-development-new"
    ];

    slugs.forEach(async (item) => {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: toTitleCase(item) + " Discussion",
            created_by_id: user.data.id
        });
        await channel.create();
        channel.addMembers([user.data.id])
    });

    return Response.json({ message: 'Hello World' })
}