import { getPostBySlug } from "../../utils/api";

export default function handler(req, res) {
    try {
        const { lang, slug } = req.query;
        console.log("API postDetail llamada con:", { lang, slug });

        if (!lang || !slug) {
            console.error("Faltan parámetros en la consulta");
            return res.status(400).json({ error: "Faltan parámetros lang o slug" });
        }

        const post = getPostBySlug(lang, slug, [
            "date",
            "slug",
            "preview",
            "title",
            "tagline",
            "preview",
            "image",
            "content",
        ]);

        if (!post) {
            console.error("Post no encontrado:", { lang, slug });
            return res.status(404).json({ error: "Post not found" });
        }

        console.log("Post encontrado:", post);
        res.status(200).json(post);
    } catch (error) {
        console.error("Error en API postDetail:", error);
        res.status(500).json({ error: "Error fetching post", details: error.message });
    }
}
