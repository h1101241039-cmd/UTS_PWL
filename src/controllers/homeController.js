import { render } from "../config/viewEngine.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: { url: "mysql://root:root@mysql:3306/bun_crud" }
  }
});

export const home = async (c) => {
    try {
        const totalMhs = await prisma.mahasiswa.count();
        return c.html(
            await render("home", {
                title: "Dashboard Bun MVC",
                mahasiswa: await prisma.mahasiswa.findMany(),
                totalMhs,
            }, c)
        );
    } catch (err) {
        console.error("ERROR HOME:", err);
        return c.text("Error: " + err.message, 500);
    }
};
